export class Post {
    title : string;
    content: string;
    like: number;
    date: Date;

    
    constructor( public title1:string, public content1: string){
        this.title=title1;
        this.content=content1;
        this.like=0;
        this.date= new Date();
    }
}
