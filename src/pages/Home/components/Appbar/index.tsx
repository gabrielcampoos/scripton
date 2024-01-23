import {
	AppBar,
	Box,
	IconButton,
	Toolbar,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';

import Logo from '../../../../assets/images/Logo-scriptOn.png';
import { AppbarSm } from './AppbarSm';

export const Appbar = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<>
			{(smDown && (
				<>
					<AppbarSm />
				</>
			)) || (
				<>
					<Box sx={{ flexGrow: 1, boxShadow: '1px 4px 10px #fff' }}>
						<AppBar
							position="static"
							sx={{
								background: '#fff',
							}}
						>
							<Toolbar>
								<IconButton
									size="small"
									edge="start"
									aria-label="menu"
									sx={{ mr: 2 }}
								>
									<Box
										component="img"
										src={Logo}
										sx={{
											width: '20%',
											borderRadius: '50%',
										}}
									/>
								</IconButton>
								<Box
									sx={{
										width: '40%',
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
									}}
								>
									<Typography
										component="button"
										variant="button"
										sx={{
											fontSize: '17px',
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
											fontSize: '17px',
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
											fontSize: '17px',
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
											width: '20%',
											fontSize: '17px',
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
				</>
			)}
		</>
	);
};
