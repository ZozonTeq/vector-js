class Vector2{
    constructor(x = 0 , y = 0){
        this.x = x;
        this.y = y; 
    }
    set(x,y){
        this.x = x ; 
        this.y = y ;
    }
    //演算
    static multiply = (a,b) => new Vector2(a.x*b.x,a.y*b.y);
    static remove   = (a,b) => new Vector2(a.x-b.x,a.y-b.y);
    static add      = (a,b) => new Vector2(a.x+b.x,a.y+b.y);
    static division = (a,b) => new Vector2(a.x/b.x,a.y/b.y);
    static mod      = (a,b) => new Vector2(a.x%b.x,a.y%b.y);
    static distance = (a,b) => Math.sqrt(Math.pow(a.x-b.x,2)+Math.pow(a.y-b.y,2));
}
class Vector3{
    constructor(x = 0 , y = 0 ,z = 0 ){
        this.x = x;
        this.y = y; 
        this.z = z;
    }
    set(x,y,z){
        this.x = x ; 
        this.y = y ;
        this.z = z;
    }
    //演算
    static multiply = (a,b) => new Vector3(a.x*b.x,a.y*b.y,a.z*b.z);
    static remove   = (a,b) => new Vector3(a.x-b.x,a.y-b.y,a.z-b.z);
    static add      = (a,b) => new Vector3(a.x+b.x,a.y+b.y,a.z+b.z);
    static division = (a,b) => new Vector3(a.x/b.x,a.y/b.y,a.z/b.z);
    static mod      = (a,b) => new Vector3(a.x%b.x,a.y%b.y,a.z%b.z);
}
class Vector4{
    constructor(x = 0 , y = 0 ,z = 0,w = 0 ){
        this.x = x;
        this.y = y; 
        this.z = z;
        this.w = w;
    }
    set(x,y,z,w){
        this.x = x ; 
        this.y = y ;
        this.z = z ;
        this.w = w ;
    }
    //演算
    static multiply = (a,b) => new Vector3(a.x*b.x,a.y*b.y,a.z*b.z,a.w*b.w);
    static remove   = (a,b) => new Vector3(a.x-b.x,a.y-b.y,a.z-b.z,a.w-b.w);
    static add      = (a,b) => new Vector3(a.x+b.x,a.y+b.y,a.z+b.z,a.w+b.w);
    static division = (a,b) => new Vector3(a.x/b.x,a.y/b.y,a.z/b.z,a.w/b.w);
    static mod      = (a,b) => new Vector3(a.x%b.x,a.y%b.y,a.z%b.z,a.w%b.w);
}
