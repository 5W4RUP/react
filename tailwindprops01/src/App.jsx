import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Css</h1>
      <Card channel="chai aur code" btnTxt="chai!" />
      <Card channel="React" btnTxt="Code!" />

    </>
  )
}

export default App
