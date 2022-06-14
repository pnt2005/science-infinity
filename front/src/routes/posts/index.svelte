<script context="module">
    export const load = async ({ fetch, params }) => {
      try {
        const slug = params.slug;
        const res = await fetch(`http://localhost:1337/api/posts`);
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
                posts: response.data
            }
        }
      } catch (e){
        console.log(e)
        return {}
      }
    }
</script>
<script>

    export let posts;
</script>
Every posts here:
<ul>
{#each posts as post}
    <li><a href={"/posts/" + post.attributes.slug}>{post.attributes.title}</a></li>
{/each}
</ul>
