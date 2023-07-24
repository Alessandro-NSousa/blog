import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { PostService } from '../service/post.service';
import { Post } from '../model/Post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listPost: Post[] | undefined;
  post: Post = new Post;
  constructor(private postService: PostService){
    
  }

  ngOnInit(): void {
    this.findPosts();
  }

  github = faGithub;

  findPosts(){
    this.postService.getPosts().subscribe((data: Post[])=>{
      this.listPost = data;
    });
  }

  inserirMensagem(){
    this.postService.postMensagem(this.post).subscribe((data: Post)=> {
      this.post = data;
      location.assign('/feed')
    })
  }

}
