import "./App.css";
import Segment from "./components/Segment";

function App() {
  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <div>
        <h1>Компонент "Отрезок"</h1>

        <p style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
          Компонент поддерживает навигацию с клавиатуры (Tab), ARIA атрибуты для
          скринридеров
        </p>
      </div>

      <div>
        <h2>Вариант 1: Пустой отрезок (0%)</h2>
        <Segment
          length={140}
          height={24}
          percentages={[0]}
          ariaLabel="Задача не начата"
        />
      </div>

      <div>
        <h2>Вариант 2: Только основная заливка 65% (solid)</h2>
        <Segment
          length={200}
          height={24}
          percentages={[65]}
          ariaLabel="Прогресс выполнения задачи"
          ariaValueText="65% выполнено"
        />
      </div>

      <div>
        <h2>Вариант 3: Две заливки - solid 65% + striped 100%</h2>
        <Segment
          length={140}
          height={24}
          percentages={[65, 100]}
          ariaLabel="Прогресс основной и дополнительной задачи"
          ariaValueText="Основная: 65%, Дополнительная: 100%"
        />
      </div>

      <div>
        <h2>Вариант 4: Полная заливка сплошная (100%)</h2>
        <Segment
          length={340}
          height={24}
          percentages={[100]}
          ariaLabel="Задача выполнена"
          ariaValueText="Выполнено полностью"
        />
      </div>

      <div>
        <h2>С кастомными ARIA атрибутами</h2>
        <Segment
          length={300}
          height={24}
          percentages={[45, 80]}
          ariaLabel="Загрузка файла"
          ariaValueNow={45}
          ariaValueMin={0}
          ariaValueMax={100}
          ariaValueText="45 из 100 мегабайт загружено"
        />
      </div>
    </div>
  );
}

export default App;
