import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import News from './containers/News/News';
import Main from './containers/Main/Main';
import Login from './containers/Login/Login';
import NewsFullInfo from './components/NewsFullInfo/NewsFullInfo';
import About from './containers/About/About';
import Contacts from './containers/Contacts/Contacts';
import AddNews from './components/AddNews/AddNews';
import Profile from './components/Profile/Profile';
import Edit from './components/Edit/Edit';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='news/editcontent/:id' element={<Edit/>}/>
        <Route path='/addnews' element={<AddNews/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/news/:id' element={<NewsFullInfo/>}/>
        <Route path='*' element = {<h1 style={{textAlign: 'center' , marginTop: '3rem'}}>Page not found</h1>}/>
      </Routes>
    </Layout>
  );
}

export default App;
