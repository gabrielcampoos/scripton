import { Box, Grid, Typography } from '@mui/material';

import Logo from '../../../../../assets/images/Logo-scriptOn.png';

export const BannerSm = () => {
	return (
		<Grid
			container
			spacing={{ xs: 2, sm: 2, md: 4 }}
			columns={{ xs: 12, sm: 8, md: 4 }}
			sx={{
				width: '100%',
				height: '400px',
				justifyContent: 'center',
				alignItems: 'center',
				background: 'linear-gradient( -150deg, #000 80%, #00F641 10% )',
			}}
		>
			<Grid item xs={6} sm={4} md={2}>
				<Typography
					sx={{
						fontSize: '13px',
						color: '#fff',
						textAlign: 'center',
					}}
				>
					CONTRATE NOSSOS SERVIÇOS PARA DESENVOLVER <br />O SITE PARA
					SUA EMPRESA. <br />
					AGILIDADE, COMPROMISSO E PROFISSIONALISMO.
				</Typography>
			</Grid>

			<Grid item xs={6} sm={4} md={2}>
				<Box component="img" src={Logo} sx={{ width: '100%' }} />
			</Grid>
		</Grid>
	);
};
