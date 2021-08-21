document.addEventListener("DOMContentLoaded", function () { 

  let formulariologin=document.getElementById("iniciosesion");
  let formularioregister=document.getElementById("registerusers");

  let changedom=document.getElementsByClassName('error')[0];
  let changedom1=document.getElementsByClassName('iniciar')[0];
  // changedom.style.display = 'block';
  
  formulariologin.addEventListener('submit',function(e){
  
    e.preventDefault();

    let datosaarray = {};
    let datos=new FormData(formulariologin);
    datos.forEach((value, key) => {datosaarray[key] = value});

    console.log(datos);
    console.log(datosaarray);
  
  
    axios({
  
      url:"login.php",
      method:"post",
      responseType:"json",
      data:JSON.stringify(datosaarray)
  
    }).then(res=>{
  
      if(res.data.codigoResultado==1){
        
          changedom1.style.display='none';
          formulariologin.reset();
          window.location.href = "index.php";

      }else{
  
          if(res.data.mensaje!=null){

              changedom1.style.display='block';
              changedom1.style.backgroundColor='#E74C3C';
              changedom1.innerHTML = res.data.mensaje;
              formulariologin.reset();

          }
      }
      console.log(res);
  
    }).catch(err=>{
      console.log(err)
    });
  
  
  });
  
  formularioregister.addEventListener('submit',function(e){

  
    e.preventDefault();
  
    let datosaarray = {};
    let datos=new FormData(formularioregister);
    datos.forEach((value, key) => {datosaarray[key] = value});
  
    // console.log(datos.get('email'));
    // console.log(datos.get('password'));
  
    console.log(datos);
    console.log(datosaarray);
  
    axios({
  
      url:"register.php",
      method:"post",
      responseType:"json",
      data:JSON.stringify(datosaarray)
  
    }).then(res=>{
  
      if(res.data.codigoResultado==1){
          changedom.style.display='block';
          changedom.style.backgroundColor='#2ECC71';
          changedom.innerHTML = res.data.mensaje;
          formularioregister.reset();
  
      }else{
  
          if(res.data.mensaje!=null){

              changedom.style.display='block';
              changedom.style.backgroundColor='#E74C3C';
              changedom.innerHTML = res.data.mensaje;
              formularioregister.reset();

              
              // console.log(res.data.mensaje);
          }
      }
      console.log(res);
  
    }).catch(err=>{
      console.log(err)
    });
  
  });
  
    
    
 });
