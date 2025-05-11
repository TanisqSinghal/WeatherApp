import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./infoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import SunnyIcon from "@mui/icons-material/Sunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://img.freepik.com/free-photo/closeup-shot-thermometer-beach-sand_181624-12367.jpg?semt=ais_hybrid&w=740";
  const HOT_URL =
    "https://img.freepik.com/free-photo/closeup-shot-thermometer-beach-sand_181624-12367.jpg?semt=ais_hybrid&w=740";
  const COLD_URL =
    "https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.jpg?s=612x612&w=0&k=20&c=jOZH4RSlX29thO6GNlvTUlYKUo_DK4xVxvXUTK7Jw5s=";
  const RAIN_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpAOGjxXekax3WF_5zM1IBtO6Ok_b9u_7cKQ&s";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345, backgroundColor: "rgb(37, 39, 39)" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp >= 20
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="Info"
            >
              {info.city}{" "}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp >= 20 ? (
                <SunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
              className="Info"
            >
              <p>Temprature = {info.temp}&deg;C</p>
              <p>Temprature Min = {info.tempMin}&deg;C</p>
              <p>Temprature Max = {info.tempMax}&deg;C</p>
              <p>Humidity = {info.humidity} </p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feelsLike}&deg;C{" "}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
