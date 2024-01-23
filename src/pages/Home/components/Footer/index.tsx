import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';

import { FooterSm } from './FooterSm';

export const Footer = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<>
			{(smDown && (
				<>
					<FooterSm />
				</>
			)) || (
				<>
					<Box
						sx={{
							width: '100%',
							height: '200px',
							background: '#00F641',
							pt: 8,
						}}
					>
						<Grid
							container
							spacing={{ xs: 2, sm: 2, md: 2 }}
							columns={{ xs: 12, sm: 6, md: 4 }}
						>
							<Grid item xs={6} sm={3} md={2}>
								<Typography
									sx={{
										fontSize: '25px',
										fontWeight: 700,
										textAlign: 'center',
									}}
								>
									Contato: scripton.web@gmail.com
								</Typography>
							</Grid>
						</Grid>
					</Box>
				</>
			)}
		</>
	);
};
