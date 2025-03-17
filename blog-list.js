// Blog data for each category
const blogData = {
    main: [
        {
            number: "001",
            title: "Getting Started with Minimalist Design",
            date: "March 14, 2025",
            link: "blog.html#post-001"
        },
        {
            number: "002",
            title: "The Impact of Responsive Design on User Engagement",
            date: "March 7, 2025",
            link: "blog.html#post-002"
        },
        {
            number: "003",
            title: "Designing for Accessibility: Beyond the Basics",
            date: "February 28, 2025",
            link: "blog.html#post-003"
        },
        {
            number: "004",
            title: "Et plus si affinité: et Hop !",
            date: "March 13, 2025",
            link: "blog.html#post-004"
        }
    ],
    music: [
        {
            number: "001",
            title: "The Evolution of Digital Music Production",
            date: "March 15, 2025",
            link: "blog-music.html#post-001"
        },
        {
            number: "002",
            title: "Vinyl's Unexpected Resurgence in the Digital Age",
            date: "March 8, 2025",
            link: "blog-music.html#post-002"
        },
        {
            number: "003",
            title: "How AI is Transforming Music Composition",
            date: "March 1, 2025",
            link: "blog-music.html#post-003"
        }
    ],
    science: [
        {
            number: "001",
            title: "Breakthroughs in Quantum Computing",
            date: "March 16, 2025",
            link: "blog-science.html#post-001"
        },
        {
            number: "002",
            title: "The Future of Sustainable Energy",
            date: "March 9, 2025",
            link: "blog-science.html#post-002"
        },
        {
            number: "003",
            title: "Advances in CRISPR Gene Editing Technology",
            date: "March 2, 2025",
            link: "blog-science.html#post-003"
        }
    ]
};

// Function to generate blog list items
function generateBlogList(category, containerId) {
    const container = document.getElementById(containerId);
    const blogs = blogData[category];
    
    // Clear existing content
    container.innerHTML = '';
    
    // Generate list items
    blogs.forEach(blog => {
        const listItem = document.createElement('li');
        listItem.className = 'blog-item';
        listItem.id = `${category}-${blog.number}`;
        
        listItem.innerHTML = `
            <a href="${blog.link}">
                <div class="blog-item-left">
                    <span class="blog-number">#${blog.number}</span>
                    <span class="blog-title">${blog.title}</span>
                </div>
                <span class="blog-date">${blog.date}</span>
            </a>
        `;
        
        container.appendChild(listItem);
    });
}

// Generate all blog lists when the page loads
document.addEventListener('DOMContentLoaded', function() {
    generateBlogList('main', 'main-blog-list');
    generateBlogList('music', 'music-blog-list');
    generateBlogList('science', 'science-blog-list');
});
