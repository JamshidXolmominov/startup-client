import { NextPage } from 'next';
import { withLayout } from 'src/layouts/layout';
import Seo from 'src/layouts/seo/seo';
import { UserDashboardPageComponent } from 'src/page-component';

const Dashboard: NextPage = () => {
	return (
		<Seo metaTitle='Sammi | Dashboard'>
			<UserDashboardPageComponent />
		</Seo>
	);
};

export default withLayout(Dashboard);
