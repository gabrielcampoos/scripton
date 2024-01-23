import { Box, Grid, Typography } from '@mui/material';

import Douglas from '../../../../../assets/images/douglas.png';
import OlaTelecom from '../../../../../assets/images/olatelecom.png';
import { CardSite } from '../components/CardSite';

export const PortfolioSm = () => {
	return (
		<Box
			sx={{
				width: '100%',
				background: '#000',
				pt: 3,
			}}
		>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Typography
					component="h1"
					variant="h5"
					sx={{
						color: '#fff',
						borderBottom: '1px solid #00F641',
					}}
				>
					PORTFÓLIO
				</Typography>
			</Box>
			<Grid
				container
				spacing={{ xs: 2, sm: 2, md: 1 }}
				columns={{ xs: 12, sm: 8, md: 4 }}
				sx={{
					width: '100%',
					height: '100%',
					justifyContent: 'center',
					alignItems: 'center',
					background:
						'linear-gradient( -150deg, #000 80%, #00F641 10% )',
					pt: 3,
				}}
			>
				<Grid
					item
					xs={7}
					sm={4}
					md={2}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<CardSite
						titulo="Douglas Coiffeur"
						url="https://douglas-coiffeur.vercel.app/"
						img={Douglas}
						descricao="Site desenvolvido para uma barbearia onde o principal requisito era ter a tabela de planos."
					/>
				</Grid>
				<Grid
					item
					xs={7}
					sm={4}
					md={2}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<CardSite
						titulo="Olá Telecom"
						url="https://ola-telecom.vercel.app/"
						img={OlaTelecom}
						descricao="Site desenvolvido para a olá telecom, visando ter o informações sobre a empresa."
					/>
				</Grid>
			</Grid>
		</Box>
	);
};
