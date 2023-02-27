function formatDate(date) {
    let currentDate = new Date();
    let delta = (+currentDate - +date);

    if (delta <= 1) {
        return `прямо сейчас`;
    
    } else if (delta < 60000) {
        return `${ Math.floor(delta / 1000) } сек. назад`
    
    } else if (delta < 36000000) {
        return `${ Math.floor(delta / 60000) } мин. назад`
    
    } else {
        let day = function() {
    
            if(date.getDate() < 9) {
                return '0' + date.getDate();
            } else {
                return date.getDate();
            };

        };  
        
        let month = function() {
            if(date.getMonth() < 9) {
                return '0' + (date.getMonth() + 1);
            } else {
                return date.getMonth() + 1;
            };

        };  

        let year = function() {
          let fullYear = String( date.getFullYear() );
          let shortYear = fullYear[2] + fullYear[3];

          return shortYear;
        };
        
        return `${day()}.${month()}.${year()} ${date.getHours()}:${date.getMinutes()}`
    };
};