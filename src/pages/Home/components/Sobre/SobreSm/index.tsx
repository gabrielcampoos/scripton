import { Box, Grid, Typography } from '@mui/material';

import Site from '../../../../../assets/images/criar-site.png';

export const SobreSm = () => {
	return (
		<>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					background: '#000',
					pt: 5,
				}}
			>
				<Typography
					component="h1"
					variant="h5"
					sx={{ color: '#fff', borderBottom: '1px solid #00F641' }}
				>
					SOBRE
				</Typography>
			</Box>
			<Grid
				container
				spacing={{ xs: 2, sm: 2, md: 2 }}
				columns={{ xs: 12, sm: 8, md: 6 }}
				sx={{
					width: '100%',
					height: '400px',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					background: '#000',
				}}
			>
				<Grid item xs={6} sm={4} md={3}>
					<Typography
						sx={{
							fontSize: '13px',
							color: '#fff',
							textAlign: 'center',
						}}
					>
						Somos uma startup focada em desenvolver web sites,
						buscando atendenter as expectativas de nossos clientes e
						entregar mais que o esperado.
						<br />
						<br />
						Nascidos em Agosto de 2023, fomos uma ideia para ajudar
						quem quer ter seu próprio web site, analisando alguns
						sites de freelancer, nós verificamos uma grande demanda
						de pessoas buscando ajuda com seus sites já existentes
						bem como, para a criação deles.
						<br />
						<br />
						Então a partir disso, criamos a{' '}
						<span style={{ color: '#00F641' }}>Script On</span> para
						suprir todas as necessidades.
					</Typography>
				</Grid>
				<Grid item xs={6} sm={4} md={3}>
					<Box component="img" src={Site} sx={{ width: '100%' }} />
				</Grid>
			</Grid>
		</>
	);
};
