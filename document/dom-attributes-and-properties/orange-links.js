let linksList = document.querySelectorAll('a');
    
    for (let item of linksList) {
        let linkPath = item.getAttribute('href');

        if ( (!linkPath) || ( !linkPath.includes('://') ) || (linkPath.startsWith('http://internal.com') ) ) continue;

      item.style.color = 'orange';
    };