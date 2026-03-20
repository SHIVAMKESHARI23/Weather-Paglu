import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL = "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhaW58ZW58MHx8MHx8fDA%3D";

  return (
    <div className="InfoBox glass-panel">
      <h2 style={{ textAlign: "center", marginBottom: "15px", fontWeight: 600 }}>
        Current Weather in {info.city}
      </h2>

      <div className="cardContainer">
        <Card
          className="weather-card"
          sx={{
            maxWidth: 345,
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(15px)',
            borderRadius: '24px',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            transition: 'all 0.3s ease',
          }}
        >
          <CardMedia
            component="img"
            height="180"
            image={
              info.humidity > 80 ? RAIN_URL :
              info.temp > 15 ? HOT_URL : COLD_URL
            }
            alt="weather image"
            sx={{ borderTopLeftRadius: '24px', borderTopRightRadius: '24px' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
              {info.city}
              {
                info.humidity > 80 ? <ThunderstormIcon sx={{ color: '#fff' }} /> :
                info.temp > 15 ? <WbSunnyIcon sx={{ color: '#ffeb3b' }} /> :
                <SevereColdIcon sx={{ color: '#00d2ff' }} />
              }
            </Typography>

            <Typography variant="body1" sx={{ color: '#f0f0f0', lineHeight: 1.8 }}>
              <strong>Temperature:</strong> {info.temp}°C <br />
              <strong>Humidity:</strong> {info.humidity}% <br />
              <strong>Min Temp:</strong> {info.tempMin}°C <br />
              <strong>Max Temp:</strong> {info.tempMax}°C <br />
              <span style={{ textTransform: 'capitalize' }}>
                <strong>Weather:</strong> {info.weather}
              </span> <br />
              <strong>Feels Like:</strong> {info.feelslike}°C
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}