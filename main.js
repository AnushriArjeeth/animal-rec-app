function start()
{
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/EAt6C4sp5/model.json',modelLoaded);

}

function modelLoaded()
{
  
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {

    if (error) 
    {
  
      console.error(error);
  
    } 
    
    else 
       {
  

      console.log(results);
  
      document.getElementById("result_object_name").innerHTML = results[0].label;
  
      document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);

      var img=document.getElementById('img').innerHTML;
  
    }
  
  }
  
   