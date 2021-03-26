
  var output = document.getElementById('output');
      if (window.FileList && window.File) {
        document.getElementById("wrap-gift-button").addEventListener('change', event => {
          output.innerHTML = '';
          for (var file of event.target.files) {
            var li = document.createElement('li');
            var name = file.name ? file.name : 'NOT SUPPORTED';
            var type = file.type ? file.type : 'NOT SUPPORTED';
            var size = file.size ? file.size : 'NOT SUPPORTED';
            li.textContent = `Name: ${name}, Type: ${type}, Size: ${size}`;
            output.appendChild(li);
          }
        }); 
      }