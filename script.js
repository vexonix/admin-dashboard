// Menampilkan data dummy di grafik
const ctx = document.getElementById('activityChart').getContext('2d');
const activityChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
        datasets: [
            {
                label: 'Postingan',
                data: [30, 45, 28, 50, 70, 60],
                borderColor: 'blue',
                fill: false
            },
            {
                label: 'Komentar',
                data: [120, 150, 180, 140, 200, 210],
                borderColor: 'green',
                fill: false
            },
            {
                label: 'Pengunjung',
                data: [300, 400, 350, 500, 600, 580],
                borderColor: 'orange',
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Fitur Tambah dan Edit Postingan
let posts = [{ id: 1, title: 'Contoh Postingan', content: 'Ini adalah isi contoh postingan' }];
const postList = document.getElementById('postList');

function populatePostList() {
    postList.innerHTML = '';
    posts.forEach(post => {
        const option = document.createElement('option');
        option.value = post.id;
        option.textContent = post.title;
        postList.appendChild(option);
    });
}

function addPost() {
    const title = document.getElementById('newPostTitle').value;
    const content = document.getElementById('newPostContent').value;
    const newPost = { id: posts.length + 1, title, content };
    posts.push(newPost);
    populatePostList();
    alert('Postingan berhasil ditambahkan');
}

function editPost() {
    const selectedId = parseInt(postList.value);
    const title = document.getElementById('editPostTitle').value;
    const content = document.getElementById('editPostContent').value;
    const post = posts.find(p => p.id === selectedId);
    if (post) {
        post.title = title;
        post.content = content;
        populatePostList();
        alert('Postingan berhasil diperbarui');
    }
}

populatePostList();
