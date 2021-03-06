
// tAni (text animetiom lib)

// MIT License
// copyright (c) 2020 Kikuchi Tomoo

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// Corresponding to HTML5 (not XML)

class tAni{
    constructor(config){
        this.id_     = config.id    || undefined;
        this.speed_  = config.speed || 500;   //ms
        this.delay_  = config.delay || 0;     //ms
        this.color_  = config.color || '#2e2e2e';
        this.dir_    = config.dir   || 'top';
        this.scope_  = config.scope || '20px';
        this.ran_    = config.ran   || false;
        
        this.elem_ = document.getElementById(this.id_);
        
        if(this.elem_==undefined) console.log("Error [tAni]: target element's id is undefined");

        this.chars_ = this.elem_.textContent;
        this.elem_.textContent = ""; //delete target of textContent
        
        this.size_  = this.chars_.length;
        this.type_  = this.elem_.nodeName;

        this.ids_   = [];

        this.elem_.style.display = 'flex';
        
        for(let i=0; i<this.size_; i++){
            var dirs = ["top","bottom","right","left"];
            if(this.ran_){
                this.dir_ = dirs[Math.floor( Math.random() * dirs.length )];
                console.log("DIR: ",this.dir_);
            }
            var e = document.createElement('div');
            e.id  = 't-'+this.id_+'-'+String(i);
            this.ids_.push(e.id);

            e.innerHTML = (this.chars_.charAt(i)==" ")?'&nbsp;':this.chars_.charAt(i);

            e.style.visibility = 'hidden';
            
            var dir0 = 'translateY('+ this.scope_ + ')';
            
            if(this.dir_=='top'){
                dir0 = 'translateY(-'+ this.scope_ + ')';
            }else if(this.dir_=='bottom'){
                dir0 = 'translateY('+ this.scope_ + ')';
            }else if(this.dir_=='left'){
                dir0 = 'translateX(-'+ this.scope_ + ')';
            }else if(this.dir_=='right'){
                dir0 = 'translateX('+ this.scope_ + ')';
            }
            
            e.style.transform  = dir0;
            e.className  = 'text-animetion';
            e.style.opacity = '0';
            e.color      = this.color_;
            this.elem_.appendChild(e);            
        }

        console.log("ids : " , this.ids_);

        var this_ = this;
        
        function show(){
            if(this_.size_ <= cnt0){
                console.log("Fnished animetion");            
                for(let i=0; i<this_.size_; i++){
                    let elem = document.getElementById(this_.ids_[i]);
                }
                
                clearInterval(intervalID);
                return false;
            }

            let elem = document.getElementById(this_.ids_[cnt0]);
            cnt0++;
            elem.style.visibility = 'visible';
            elem.style.opacity = '1';
            elem.style.transform = 'translateY(0px)';
        }

        var cnt0 = 0; // used by show func

        
        var intervalID;

        function setout(){
            console.log("speed: ", this_.speed_);
            intervalID = setInterval(show, this_.speed_);
        }

        setTimeout(setout, this.delay_);
    }    
}
