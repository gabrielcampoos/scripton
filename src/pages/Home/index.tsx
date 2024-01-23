import { Box } from '@mui/material';

import { Appbar } from './components/Appbar';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { Portfolio } from './components/Portfolio';
import { Sobre } from './components/Sobre';

export const Home = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '100vh',
			}}
		>
			<Appbar />
			<Banner />
			<Sobre />
			<Portfolio />
			<Footer />
		</Box>
	);
};
