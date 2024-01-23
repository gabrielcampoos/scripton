import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';

import Logo from '../../../../assets/images/Logo-scriptOn.png';
import { BannerSm } from './BannerSm';

export const Banner = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<>
			{(smDown && (
				<>
					<BannerSm />
				</>
			)) || (
				<>
					<Grid
						container
						spacing={{ xs: 2, sm: 2, md: 4 }}
						columns={{ xs: 12, sm: 8, md: 4 }}
						sx={{
							width: '100%',
							height: '800px',
							justifyContent: 'center',
							alignItems: 'center',
							background:
								'linear-gradient( -150deg, #000 80%, #00F641 10% )',
						}}
					>
						<Grid item xs={12} sm={4} md={2}>
							<Typography
								sx={{
									fontSize: '20px',
									color: '#fff',
									textAlign: 'center',
									letterSpacing: '3px',
									lineHeight: '40px',
									pl: 20,
								}}
							>
								CONTRATE NOSSOS SERVIÇOS PARA DESENVOLVER <br />
								O SITE PARA SUA EMPRESA. <br />
								AGILIDADE, COMPROMISSO E PROFISSIONALISMO.
							</Typography>
						</Grid>

						<Grid item xs={12} sm={4} md={2}>
							<Box component="img" src={Logo} />
						</Grid>
					</Grid>
				</>
			)}
		</>
	);
};
