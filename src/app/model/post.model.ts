export class Post {
    title : string;
    content: string;
    loveIts:number;
    created_at: Date;
    
    constructor( public title1:string, public content1: string){
        this.title=title1;
        this.content=content1;
        this.loveIts = 0;
        this.created_at= new Date();
    }
}
