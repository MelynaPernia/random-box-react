(() => {
  // Declaración de variables 
  const color = 'rgb(' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ',' + Math.trunc(Math.random() * 255) + ')';  
  const sizeText = Math.trunc(Math.random() * (72 - 12) + 12) + 'px';

  const stylesBox = {
    backgroundColor: color,
    border: '1px solid black',
    boxShadow: '3px 3px 2px black',
    // height: 'auto',

    // box-shadow:'
   
  }

  const styleText = {
    color: 'white',
    fontSize: sizeText,
    textAlign: 'center',
  }

  const ContainerBox = () => (
    <div style={stylesBox}>
      <p style={styleText}>Hola Mundo</p>
    </div>
  );

  ReactDOM.render( < ContainerBox / > , document.getElementById('container-box'));
})();