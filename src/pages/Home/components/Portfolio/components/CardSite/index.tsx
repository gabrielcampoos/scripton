import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Grid,
	Typography,
} from '@mui/material';

interface CardSiteProps {
	titulo: string;
	url: string;
	img: string;
	descricao: string;
}

export const CardSite = ({ titulo, url, img, descricao }: CardSiteProps) => {
	return (
		<>
			<Grid item xs={12} md={2} lg={4}>
				<Card variant="outlined">
					<CardHeader title={titulo} />

					<CardContent>
						<Box
							component="img"
							src={img}
							sx={{
								width: '100%',
							}}
						/>
						<Typography>{descricao}</Typography>
					</CardContent>
					<CardActions>
						<Box
							component="button"
							sx={{
								border: 'none',
								background: '#00F641',
								width: '100px',
								padding: '6px',
								borderRadius: '10px',
							}}
						>
							<a
								href={url}
								style={{
									textDecoration: 'none',
									fontSize: '16px',
									fontWeight: 'bold',
									color: '#000',
									letterSpacing: '1px',
								}}
							>
								Visitar
							</a>
						</Box>
					</CardActions>
				</Card>
			</Grid>
		</>
	);
};
