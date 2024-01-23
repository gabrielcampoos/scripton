import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';

export const AppbarSm = () => {
	return (
		<Box sx={{ flexGrow: 1, boxShadow: '1px 4px 10px #fff' }}>
			<AppBar
				sx={{
					position: 'static',
					background: '#fff',
					padding: ' 0 10px',
				}}
			>
				<Toolbar>
					<IconButton
						size="small"
						edge="start"
						aria-label="menu"
						sx={{ mr: 2 }}
					></IconButton>
					<Box
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<Typography
							component="button"
							variant="button"
							sx={{
								fontSize: '13px',
								fontWeight: '500',
								background: 'transparent',
								border: 'none',
								cursor: 'pointer',
								'&:hover': {
									background: '#fff',
									color: '#00F641',
									transition: 'ease-in-out 0.3s',
								},
							}}
						>
							Home
						</Typography>

						<Typography
							component="button"
							variant="button"
							sx={{
								fontSize: '13px',
								fontWeight: '500',
								background: 'transparent',
								border: 'none',
								cursor: 'pointer',
								'&:hover': {
									background: '#fff',
									color: '#00F641',
									transition: 'ease-in-out 0.3s',
								},
							}}
						>
							Sobre
						</Typography>

						<Typography
							component="button"
							variant="button"
							sx={{
								fontSize: '13px',
								fontWeight: '500',
								background: 'transparent',
								border: 'none',
								cursor: 'pointer',
								'&:hover': {
									background: '#fff',
									color: '#00F641',
									transition: 'ease-in-out 0.3s',
								},
							}}
						>
							Portfólio
						</Typography>

						<Typography
							component="button"
							variant="button"
							sx={{
								fontSize: '13px',
								fontWeight: '500',
								color: '#fff',
								background: '#000',
								border: 'none',
								cursor: 'pointer',
								borderRadius: '10px',
								'&:hover': {
									background: '#fff',
									color: '#00F641',
									transition: 'ease-in-out 0.3s',
								},
							}}
						>
							Contato
						</Typography>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
