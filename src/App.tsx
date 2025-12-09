import './App.css'
import Segment from './components/Segment'

function App() {
  return (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <h1>Компонент "Отрезок"</h1>

      <div>
        <h2>Вариант 1: Пустой отрезок (0%)</h2>
        <Segment
          length={140}
          height={24}
          primary={0}
          secondary={0}
        />
      </div>

      <div>
        <h2>Вариант 2: Штриховка 100% + сплошная заливка 65% поверх</h2>
        <Segment
          length={140}
          height={24}
          primary={65}
          secondary={100}
        />
      </div>

      <div>
        <h2>Вариант 3: Полная заливка сплошная (100%)</h2>
        <Segment
          length={340}
          height={24}
          primary={100}
          secondary={0}
        />
      </div>

      <div>
        <h2>Дополнительно: Штриховка 100%, основная 30%</h2>
        <Segment
          length={340}
          height={24}
          primary={30}
          secondary={100}
        />
      </div>

      <div>
        <h2>Дополнительно: Штриховка 50%, основная 80%</h2>
        <Segment
          length={300}
          height={24}
          primary={80}
          secondary={50}
        />
      </div>

      <div>
        <h2>С явным указанием типа заливки (striped)</h2>
        <Segment
          length={200}
          height={24}
          primary={70}
          secondary={100}
        />
      </div>
    </div>
  )
}

export default App
