<script context="module">
    export const load = async ({ fetch, params }) => {
      try {
        const slug = params.slug;
        const res = await fetch(`http://localhost:1337/api/posts/${slug}`);
        const response = await res.json();
        console.log(response.data)

        if(!res.ok){
            console.log(res);
            return {
                
                status: 301,
                // error: new Error('Could not fetch post')
                redirect: '/posts'
            }
        }
        return { 
            props: { 
                post: response.data
            }
        }
      } catch (e){
        console.log(e)
        return {}
      }
    }
</script>
<script>
    import SvelteMarkdown from 'svelte-markdown';
    import Break from '$lib/markdown/Break.svelte';
    import ImageFluid from '$lib/markdown/ImageFluid.svelte';
    export let post;

    let items = [];

    //Table of content
    function handleParsed(e){
        console.log(e.detail.tokens)
        for(let token of e.detail.tokens){
            if(token.type == 'heading'){
                items = [...items, token.text]
            }
        }
    }
</script>
<div class="col-12 col-lg-7 col-xl-7 offset-lg-1 offset-xl-2">
    <div style="margin-top: 130px">
        <p class="title" style="padding-right: 60px">{post.attributes.title}</p>
    </div>
    <div class="post-card mt-5">
        <div class="d-flex flex-column mb-5 pb-5" style="padding-right: 60px">
            <img class="cover-image" src={'http://localhost:1337' + post.attributes.featured_image.data.attributes.url}>
            <span class="cover-caption w-100 text-center mt-2">
                {post.attributes.cover_caption}
            </span>
        </div>
        
        <div class="" style="padding-right:60px">
            <SvelteMarkdown source={post.attributes.content} on:parsed={handleParsed} renderers={{space: Break, image: ImageFluid }}/>
        </div>
    </div>
</div>
