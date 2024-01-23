import { Box, Grid, Typography } from '@mui/material';

export const FooterSm = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '100px',
				background: '#00F641',
				pt: 4,
			}}
		>
			<Grid
				container
				spacing={{ xs: 2, sm: 2, md: 2 }}
				columns={{ xs: 12, sm: 6, md: 4 }}
			>
				<Grid item xs={12} sm={3} md={2}>
					<Typography
						sx={{
							fontSize: '15px',
							fontWeight: 700,
							textAlign: 'center',
						}}
					>
						Contato: scripton.web@gmail.com
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
};
