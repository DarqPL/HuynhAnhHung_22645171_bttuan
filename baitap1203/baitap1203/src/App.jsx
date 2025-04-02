import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Filter from './components/Filter'
import Foods from './components/Foods'
import Pagination from './components/Pagination'

function App() {
  return (
    <div className="grid grid-cols-[1fr_3fr] gap-1 p-1 bg-gray-200" style={{ gridTemplateAreas: '"menu header" "menu subcontent" "menu content" "footer footer"' }}>
      <div className="bg-white bg-opacity-80 p-2 text-center" style={{ gridArea: 'header' }}>
        <h2>Dashboard</h2>
      </div>
      <div className="bg-white bg-opacity-80 p-2" style={{ gridArea: 'menu' }}>
        <ul>
          <li><a href="" className='hover:bg-pink-500 p-2 block'>Dashboard</a></li>
          <li><a href="" className='hover:bg-pink-500 p-2 block'>Projects</a></li>
          <li><a href="" className='hover:bg-pink-500 p-2 block'>Teams</a></li>
          <li><a href="" className='hover:bg-pink-500 p-2 block'>Analytics</a></li>
          <li><a href="" className='hover:bg-pink-500 p-2 block'>Messages</a></li>
          <li><a href="" className='hover:bg-pink-500 p-2 block'>Intergrations</a></li>
        </ul>
      </div>
      <div className="bg-white bg-opacity-80 p-2" style={{ gridArea: 'subcontent' }}>
        <h3>Overview</h3>
      </div>
      <div className="bg-white bg-opacity-80 p-2" style={{ gridArea: 'content' }}>
        <h3>Detailed report</h3>
        <table className="min-w-full table-auto mt-4 border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2"><input type="checkbox" /></th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Company</th>
            <th className="border px-4 py-2">Order Value</th>
            <th className="border px-4 py-2">Order Date</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 text-center">
              <input type="checkbox" />
            </td>
            <td className="border px-4 py-2">asdasda</td>
            <td className="border px-4 py-2">asdsad</td>
            <td className="border px-4 py-2">10000</td>
            <td className="border px-4 py-2">2025-04-02</td>
            <td className="border px-4 py-2">New</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-center">
              <input type="checkbox" />
            </td>
            <td className="border px-4 py-2">asdasda</td>
            <td className="border px-4 py-2">asdsad</td>
            <td className="border px-4 py-2">10000</td>
            <td className="border px-4 py-2">2025-04-02</td>
            <td className="border px-4 py-2">New</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-center">
              <input type="checkbox" />
            </td>
            <td className="border px-4 py-2">asdasda</td>
            <td className="border px-4 py-2">asdsad</td>
            <td className="border px-4 py-2">10000</td>
            <td className="border px-4 py-2">2025-04-02</td>
            <td className="border px-4 py-2">New</td>
          </tr>
        </tbody>
      </table>
      </div>
      <div className="bg-white bg-opacity-80 p-2" style={{ gridArea: 'footer' }}>
        <h4>Footer</h4>
      </div>
    </div>
  )
}

export default App
