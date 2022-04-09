function LinkColorSwitch(self)
    {   var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length)
            {   alist[i].style.color=self;
                i+=1;   }}

function NightDaySwitch(self)
    {   if(self.value == '야간 모드')
            {   var target = document.querySelector('body');
                target.style.backgroundColor='black';
                target.style.color='white';
                self.value = '주간 모드';
                LinkColorSwitch('aquamarine');   }
        else if(self.value == '주간 모드')
            {   var target = document.querySelector('body');
                target.style.backgroundColor='white';
                target.style.color='black';
                self.value = '야간 모드';
                LinkColorSwitch('white');    }}

function OutputScreenSize()
    {   var screenWidth = screen.width;
        var screenHeight = screen.height;
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        const pageWidth = document.documentElement.scrollWidth;
        const pageHeight = document.documentElement.scrollHeight;
        var x = document.getElementById("screen");
        x.innerHTML = "Device Screen: width: " + screenWidth + ", height: " + screenHeight + ".";
        var y = document.getElementById("window");
        y.innerHTML = "Browser Window: width: " + windowWidth + ", height: " + windowHeight + ".";
        var z = document.getElementById("page");
        z.innerHTML = "Webpage: width:" + pageWidth + ", height: " + pageHeight + ".";   }