document.addEventListener('DOMContentLoaded', async () => {
    const blogFiles = ['blog-1.html', 'blog-2.html'];
    const blogListContainer = document.getElementById('blog-list-container');

    for (const file of blogFiles) {
        const response = await fetch(file);
        const htmlText = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, 'text/html');

        const blogTitle = doc.querySelector('.blog-title').textContent;
        const blogSection = document.createElement('div');
        blogSection.classList.add('blog-section');
        blogSection.innerHTML = `<h2>${blogTitle}</h2>`;

        const posts = doc.querySelectorAll('.blog-post');
        posts.forEach(post => {
            const postNumber = post.querySelector('.post-number').textContent;
            const postTitle = post.querySelector('.post-title').textContent;
            const postDate = post.querySelector('.post-date').textContent;

            const postLink = document.createElement('a');
            postLink.href = `${file}#${post.id}`;
            postLink.classList.add('post-panel');
            postLink.innerHTML = `
                <div class="post-panel-left">
                    <span class="post-number">${postNumber}</span>
                    <span class="post-title">${postTitle}</span>
                </div>
                <span class="post-date">${postDate}</span>`;

            blogSection.appendChild(postLink);
        });

        blogListContainer.appendChild(blogSection);
    }
});
