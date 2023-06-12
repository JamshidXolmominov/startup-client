import { Button, Card, CardBody, Flex, Heading, Stack, Text, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { Form, Formik, FormikValues } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from 'src/components/section-title/section-title';
import TextAreaField from 'src/components/text-area-field/text-area-field';
import TextFiled from 'src/components/text-filed/text-filed';
import { API_URL, getMailUrl } from 'src/config/api.config';

const ContactPageComponent = () => {
	const { t } = useTranslation();
	const [isLoading, setIsLoading] = useState(false);
	const toast = useToast();

	const onSubmit = (formikValues: FormikValues) => {
		try {
			setIsLoading(true);
			axios.post(`${API_URL}${getMailUrl('contact-us')}`, formikValues);
			toast({ title: 'Successfully', position: 'top-right' });
			setIsLoading(false);
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	};

	return (
		<Flex
			h={'90vh'}
			justify={'flex-start'}
			direction={{ base: 'column', lg: 'row' }}
			align={'center'}
			gap={'4'}
		>
			<SectionTitle
				w={{ base: '100%', lg: '40%' }}
				title={t('contact_title', { ns: 'global' })}
				subtitle={t('contact_description', { ns: 'global' })}
			/>
			<Card w={{ base: '100%', lg: '60%' }}>
				<CardBody>
					<Heading fontSize={'2xl'}>{t('contact_heading', { ns: 'global' })}</Heading>
					<Text fontSize={'lg'} mt={4}>
						{t('contact_text', { ns: 'global' })}
					</Text>
					<Formik onSubmit={onSubmit} initialValues={{ email: '', name: '', message: '' }}>
						<Form>
							<Stack spacing={4} mt={5}>
								<TextFiled
									name='name'
									label={t('contact_name', { ns: 'global' })}
									placeholder={'Omar'}
								/>
								<TextFiled
									name='email'
									label={t('contact_email', { ns: 'global' })}
									placeholder={'example@sammi.ac'}
								/>
								<TextAreaField
									name={'message'}
									label={t('contact_message', { ns: 'global' }) as string}
									height={'150px'}
								/>

								<Button
									w={'full'}
									h={14}
									colorScheme={'facebook'}
									type={'submit'}
									isLoading={isLoading}
								>
									{t('contact_btn', { ns: 'global' })}
								</Button>
							</Stack>
						</Form>
					</Formik>
				</CardBody>
			</Card>
		</Flex>
	);
};

export default ContactPageComponent;
