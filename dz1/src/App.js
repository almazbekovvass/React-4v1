
function Header () {
  return(
      <>
        <Title/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, illum?</p>
      </>
  )
}
function Content() {
  return(
      <>
        <Title/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae doloribus eaque eos et expedita fuga laboriosam obcaecati pariatur qui.</p>
      </>
  )
}
function Footer() {
  return(
      <>
        <Title/>
        <p>Lorem ipsum dolor sit amet.</p>
      </>
  )
}
function Title () {
  return(
      <>
        <h3>Hello</h3>
      </>
  )
}
function App() {
  return (
    <div>
        <Header/>
        <Content/>
        <Footer/>
    </div>
  );
}

export default App;
