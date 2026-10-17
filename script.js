// Pulse Platform - Frontend Logic
// Supports both VS Code Live Server (http://127.0.0.1:5500/Frontend/index.html) and Express Server

const isLiveServer = window.location.port === '5500';
const API_BASE = isLiveServer ? 'http://localhost:3000/api' : '/api';

// Seed fallback data if running isolated from backend
const DEFAULT_USERS = [
  {
    id: 'u_sruthi',
    username: 'sruthinamburi',
    displayName: 'Sruthi Namburi',
    handle: '@sruthinamburi',
    avatarUrl: 'assets/images/avatar_sruthi_namburi_1792219752949.jpg',
    bio: 'Software Engineering Intern @CodeAlpha | Building full-stack web applications with Express & React. Passionate about clean UI/UX, typography math & distributed systems.',
    location: 'Vijayawada, India',
    website: 'https://github.com/',
    joinedDate: 'Joined October 2024',
    followingIds: ['u1', 'u2', 'u3'],
    followersCount: 1284,
    followingCount: 3,
    bookmarkedPostIds: ['p1', 'p2'],
  },
  {
    id: 'u1',
    username: 'alexchen',
    displayName: 'Alex Chen',
    handle: '@alexchen',
    avatarUrl: 'assets/images/avatar_alex_chen_1792218186303.jpg',
    bio: 'Product designer & frontend craftsperson. Exploring design systems, typography math, and spatial computing.',
    location: 'San Francisco, CA',
    website: 'https://alexchen.design',
    joinedDate: 'Joined March 2024',
    followingIds: ['u_sruthi', 'u2', 'u3'],
    followersCount: 1420,
    followingCount: 3,
    bookmarkedPostIds: ['p_sruthi_1'],
  },
  {
    id: 'u2',
    username: 'sarahjenkins',
    displayName: 'Sarah Jenkins',
    handle: '@sarahj',
    avatarUrl: 'assets/images/avatar_sarah_jenkins_1792218187158.jpg',
    bio: 'Visual director & documentary photographer. 35mm film collector. Chasing morning fog and Brutalist concrete.',
    location: 'Portland, OR',
    website: 'https://sarahjenkins.photo',
    joinedDate: 'Joined January 2024',
    followingIds: ['u_sruthi', 'u1'],
    followersCount: 3890,
    followingCount: 2,
    bookmarkedPostIds: ['p_sruthi_1', 'p2'],
  },
  {
    id: 'u3',
    username: 'marcusvance',
    displayName: 'Marcus Vance',
    handle: '@marcusv',
    avatarUrl: 'assets/images/avatar_marcus_vance_1792218187935.jpg',
    bio: 'Distributed systems & AI researcher. Writing about agentic protocols, verifiable inference, and low-latency engines.',
    location: 'Seattle, WA',
    website: 'https://vance.research',
    joinedDate: 'Joined February 2024',
    followingIds: ['u_sruthi', 'u1', 'u2'],
    followersCount: 2150,
    followingCount: 3,
    bookmarkedPostIds: ['p_sruthi_2'],
  },
  {
    id: 'u4',
    username: 'rohitsharma',
    displayName: 'Rohit Sharma',
    handle: '@rohitdev',
    avatarUrl: 'assets/images/avatar_rohit_sharma_1792220017809.jpg',
    bio: 'Full-Stack Engineer & Mentor. Building scalable Microservices with Node.js & React. Open-source enthusiast.',
    location: 'Vijayawada, India',
    website: 'https://rohitdev.io',
    joinedDate: 'Joined April 2024',
    followingIds: ['u_sruthi', 'u1', 'u5'],
    followersCount: 1680,
    followingCount: 3,
    bookmarkedPostIds: ['p_sruthi_1'],
  },
  {
    id: 'u5',
    username: 'mayapatel',
    displayName: 'Maya Patel',
    handle: '@mayaux',
    avatarUrl: 'assets/images/avatar_maya_patel_1792220017739.jpg',
    bio: 'UI/UX Design Lead @CreativesLab. Focused on accessibility, zero-pill aesthetics, and design tokens.',
    location: 'Bengaluru, India',
    website: 'https://maya.design',
    joinedDate: 'Joined May 2024',
    followingIds: ['u_sruthi', 'u1', 'u2'],
    followersCount: 2450,
    followingCount: 3,
    bookmarkedPostIds: ['p_sruthi_1'],
  },
  {
    id: 'u6',
    username: 'elenarostova',
    displayName: 'Elena Rostova',
    handle: '@elenar',
    avatarUrl: 'assets/images/avatar_elena_rostova_1792220017118.jpg',
    bio: 'Tech Lead & AI Systems Architect. Working on agentic orchestration, distributed state machines, and real-time feeds.',
    location: 'Zurich, Switzerland',
    website: 'https://rostova.tech',
    joinedDate: 'Joined June 2024',
    followingIds: ['u_sruthi', 'u3'],
    followersCount: 3120,
    followingCount: 2,
    bookmarkedPostIds: ['p_sruthi_2'],
  },
  {
    id: 'u7',
    username: 'davidkim',
    displayName: 'David Kim',
    handle: '@davidk',
    avatarUrl: 'assets/images/avatar_david_kim_1792220017926.jpg',
    bio: 'DevOps & Cloud Engineer. Kubernetes, Docker, and CI/CD pipelines. Coffee & hiking lover.',
    location: 'Seoul, South Korea',
    website: 'https://davidkim.cloud',
    joinedDate: 'Joined July 2024',
    followingIds: ['u_sruthi', 'u1', 'u4'],
    followersCount: 1980,
    followingCount: 3,
    bookmarkedPostIds: ['p_sruthi_1'],
  },
  {
    id: 'u8',
    username: 'ananyareddy',
    displayName: 'Ananya Reddy',
    handle: '@ananya_codes',
    avatarUrl: 'assets/images/avatar_maya_patel_1792220017739.jpg',
    bio: 'Frontend Craftsperson & Open Source Contributor. Passionate about WebGL, Tailwind CSS, and smooth transitions.',
    location: 'Chennai, India',
    website: 'https://ananya.dev',
    joinedDate: 'Joined August 2024',
    followingIds: ['u_sruthi', 'u5'],
    followersCount: 890,
    followingCount: 2,
    bookmarkedPostIds: ['p_sruthi_1'],
  },
  {
    id: 'u9',
    username: 'liamoconnor',
    displayName: 'Liam O\'Connor',
    handle: '@liamo',
    avatarUrl: 'assets/images/avatar_alex_chen_1792218186303.jpg',
    bio: 'Mobile & Web Developer. Building cross-platform apps with React Native & TypeScript.',
    location: 'Dublin, Ireland',
    website: 'https://liamoc.me',
    joinedDate: 'Joined September 2024',
    followingIds: ['u_sruthi', 'u2', 'u3'],
    followersCount: 1140,
    followingCount: 3,
    bookmarkedPostIds: [],
  },
  {
    id: 'u10',
    username: 'priyanair',
    displayName: 'Priya Nair',
    handle: '@priyanair',
    avatarUrl: 'assets/images/avatar_sarah_jenkins_1792218187158.jpg',
    bio: 'Software Engineer @InnovateTech. Speaker on Web Performance, GraphQL, and microfrontends.',
    location: 'Pune, India',
    website: 'https://priyanair.tech',
    bannerGradient: 'from-rose-950 via-slate-900 to-indigo-950',
    joinedDate: 'Joined October 2024',
    followingIds: ['u_sruthi', 'u4', 'u5'],
    followersCount: 1720,
    followingCount: 3,
    bookmarkedPostIds: ['p_sruthi_2'],
  },
];

const DEFAULT_POSTS = [
  {
    id: 'p_sruthi_1',
    authorId: 'u_sruthi',
    content: 'Thrilled to launch Task 2 of my CodeAlpha Web Development Internship! 🚀\n\nBuilt Pulse – a responsive social media platform featuring user profiles, dynamic feed generation, threaded discussions, and a persistent like & follow graph powered by Express.js.\n\nFocused heavily on micro-interactions, responsive typography, and anti-slop visual discipline!',
    mediaUrl: 'assets/images/post_coding_workspace_1792219753787.jpg',
    tags: ['codealpha', 'webdev', 'fullstack', 'react', 'express'],
    createdAt: new Date(Date.now() - 1000 * 60 * 25).toISOString(),
    likes: ['u1', 'u2', 'u3'],
    commentsCount: 3,
  },
  {
    id: 'p_sruthi_2',
    authorId: 'u_sruthi',
    content: 'Key architectural takeaway from designing the social follower graph: Decoupling optimistic UI mutations from asynchronous database synchronization gives users immediate tactile feedback while preventing stale count cascades.',
    tags: ['architecture', 'javascript', 'systems', 'design'],
    createdAt: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
    likes: ['u1', 'u3'],
    commentsCount: 2,
  },
  {
    id: 'p1',
    authorId: 'u2',
    content: 'Dawn expedition across the northern ridge. The stillness of the mountain water before the breeze kicks in is unmatched. Shot on mechanical Leica 35mm.',
    mediaUrl: 'assets/images/post_nature_nordic_1792218188049.jpg',
    tags: ['photography', 'nature', 'landscape', 'film'],
    createdAt: new Date(Date.now() - 1000 * 60 * 240).toISOString(),
    likes: ['u_sruthi', 'u1', 'u3'],
    commentsCount: 2,
  },
  {
    id: 'p2',
    authorId: 'u1',
    content: 'New case study: The geometric pavilion project. We focused on raw concrete cantilevers and razor-sharp shadow lines that shift with solar azimuth angles through the solstice.',
    mediaUrl: 'assets/images/post_architecture_minimal_1792218188837.jpg',
    tags: ['architecture', 'minimalism', 'design'],
    createdAt: new Date(Date.now() - 1000 * 60 * 360).toISOString(),
    likes: ['u_sruthi', 'u2'],
    commentsCount: 1,
  },
  {
    id: 'p3',
    authorId: 'u3',
    content: 'Thinking about the evolution of social feeds: algorithmic engagement loops vs chronologically scoped graph feeds. When you give users full sovereign controls over their timeline and follower graph, signal-to-noise jumps tenfold.',
    tags: ['systems', 'tech', 'software', 'graphs'],
    createdAt: new Date(Date.now() - 1000 * 60 * 500).toISOString(),
    likes: ['u_sruthi', 'u1', 'u2'],
    commentsCount: 2,
  },
];

const DEFAULT_COMMENTS = [
  {
    id: 'c1',
    postId: 'p1',
    authorId: 'u1',
    content: 'The mist tonal gradient against the pines is spectacular. Was this an early 6am capture?',
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
  },
  {
    id: 'c2',
    postId: 'p1',
    authorId: 'u2',
    content: 'Yes! Exactly at 5:48 AM just before the low fog burned off.',
    createdAt: new Date(Date.now() - 1000 * 60 * 18).toISOString(),
  },
  {
    id: 'c3',
    postId: 'p2',
    authorId: 'u2',
    content: 'Those shadow cuts on the concrete facade are pure poetry.',
    createdAt: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
  },
  {
    id: 'c4',
    postId: 'p3',
    authorId: 'u1',
    content: 'Strongly agree. Intentional curation always beats infinite slot-machine scrolling.',
    createdAt: new Date(Date.now() - 1000 * 60 * 240).toISOString(),
  },
];

// In-memory application state
const state = {
  currentUser: null,
  allUsers: [],
  posts: [],
  comments: [],
  activeView: 'feed', // 'feed' | 'profile' | 'explore'
  feedMode: 'all', // 'all' | 'following'
  selectedTag: null,
  searchQuery: '',
  profileUser: null,
  expandedComments: new Set(),
  commentsCache: {},
  selectedPostImage: '',
};

// Fix asset paths if necessary
function resolveAssetPath(url) {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  if (url.startsWith('/src/assets/images/')) {
    const filename = url.split('/').pop();
    return `assets/images/${filename}`;
  }
  return url;
}

// Fetch helper with fallback to local state
async function apiFetch(endpoint, options = {}) {
  try {
    const url = `${API_BASE}${endpoint}`;
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn(`API call ${endpoint} failed, falling back to local dataset:`, err);
  }
  return null;
}

// Format relative time helper
function formatTime(isoString) {
  try {
    const diff = Date.now() - new Date(isoString).getTime();
    const m = Math.floor(diff / 60000);
    if (m < 1) return 'just now';
    if (m < 60) return `${m}m ago`;
    const h = Math.floor(m / 60);
    if (h < 24) return `${h}h ago`;
    return `${Math.floor(h / 24)}d ago`;
  } catch {
    return 'recently';
  }
}

// Initialize Application
async function init() {
  // Try to load from server
  const [me, users, posts] = await Promise.all([
    apiFetch('/me'),
    apiFetch('/users'),
    apiFetch('/posts'),
  ]);

  if (users && users.length) {
    state.allUsers = users.map((u) => ({ ...u, avatarUrl: resolveAssetPath(u.avatarUrl) }));
  } else {
    const localUsers = localStorage.getItem('pulse_users');
    state.allUsers = localUsers ? JSON.parse(localUsers) : DEFAULT_USERS;
  }

  if (me) {
    state.currentUser = { ...me, avatarUrl: resolveAssetPath(me.avatarUrl) };
  } else {
    state.currentUser = state.allUsers[0];
  }

  if (posts && posts.length) {
    state.posts = posts.map((p) => ({
      ...p,
      mediaUrl: resolveAssetPath(p.mediaUrl),
      author: state.allUsers.find((u) => u.id === p.authorId),
    }));
  } else {
    const localPosts = localStorage.getItem('pulse_posts');
    state.posts = localPosts ? JSON.parse(localPosts) : DEFAULT_POSTS;
    state.posts.forEach((p) => {
      p.author = state.allUsers.find((u) => u.id === p.authorId);
      p.mediaUrl = resolveAssetPath(p.mediaUrl);
    });
  }

  state.profileUser = state.currentUser;

  setupEventListeners();
  renderApp();
}

// Setup Event Listeners
function setupEventListeners() {
  // Navigation
  document.getElementById('brandBtn').addEventListener('click', () => switchView('feed'));
  document.getElementById('navFeedBtn').addEventListener('click', () => switchView('feed'));
  document.getElementById('navExploreBtn').addEventListener('click', () => switchView('explore'));
  document.getElementById('navProfileBtn').addEventListener('click', () => {
    state.profileUser = state.currentUser;
    switchView('profile');
  });

  document.getElementById('sideNavAllBtn').addEventListener('click', () => {
    state.feedMode = 'all';
    state.selectedTag = null;
    switchView('feed');
  });

  document.getElementById('sideNavFollowingBtn').addEventListener('click', () => {
    state.feedMode = 'following';
    state.selectedTag = null;
    switchView('feed');
  });

  document.getElementById('sideNavExploreBtn').addEventListener('click', () => switchView('explore'));
  document.getElementById('sideNavProfileBtn').addEventListener('click', () => {
    state.profileUser = state.currentUser;
    switchView('profile');
  });

  // Feed Tabs
  document.getElementById('tabGlobalBtn').addEventListener('click', () => {
    state.feedMode = 'all';
    state.selectedTag = null;
    renderApp();
  });

  document.getElementById('tabFollowingBtn').addEventListener('click', () => {
    state.feedMode = 'following';
    state.selectedTag = null;
    renderApp();
  });

  document.getElementById('clearFilterBtn').addEventListener('click', () => {
    state.selectedTag = null;
    state.searchQuery = '';
    document.getElementById('searchInput').value = '';
    renderApp();
  });

  // Persona Selector in Header
  const personaSelect = document.getElementById('personaSelect');
  personaSelect.addEventListener('change', (e) => {
    const val = e.target.value;
    if (val === '__new__') {
      openModal('newUserModal');
    } else {
      switchPersona(val);
    }
  });

  // Modals
  document.getElementById('openCreatePostBtn').addEventListener('click', () => openCreatePostModal());
  document.getElementById('composerTrigger').addEventListener('click', () => openCreatePostModal());
  document.getElementById('closeCreatePostModal').addEventListener('click', () => closeModal('createPostModal'));
  document.getElementById('cancelCreatePostBtn').addEventListener('click', () => closeModal('createPostModal'));

  document.getElementById('closeEditProfileModal').addEventListener('click', () => closeModal('editProfileModal'));
  document.getElementById('cancelEditProfileBtn').addEventListener('click', () => closeModal('editProfileModal'));

  document.getElementById('closeFollowListModal').addEventListener('click', () => closeModal('followListModal'));

  document.getElementById('openNewUserModalBtn').addEventListener('click', () => openModal('newUserModal'));
  document.getElementById('closeNewUserModal').addEventListener('click', () => closeModal('newUserModal'));
  document.getElementById('cancelNewUserBtn').addEventListener('click', () => closeModal('newUserModal'));

  document.getElementById('openDbModalBtn').addEventListener('click', () => openDbModal());
  document.getElementById('closeDbModal').addEventListener('click', () => closeModal('dbModal'));
  document.getElementById('closeDbModalBtn').addEventListener('click', () => closeModal('dbModal'));

  document.getElementById('leftFollowersTrigger').addEventListener('click', () => openFollowList('followers', state.currentUser));
  document.getElementById('leftFollowingTrigger').addEventListener('click', () => openFollowList('following', state.currentUser));

  // Forms
  document.getElementById('createPostForm').addEventListener('submit', handleCreatePostSubmit);
  document.getElementById('editProfileForm').addEventListener('submit', handleEditProfileSubmit);
  document.getElementById('newUserForm').addEventListener('submit', handleNewUserSubmit);
  document.getElementById('resetDbBtn').addEventListener('click', handleResetDb);

  // Search
  document.getElementById('searchInput').addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    if (state.activeView !== 'feed') {
      state.activeView = 'feed';
    }
    renderApp();
  });
}

function switchView(view) {
  state.activeView = view;
  renderApp();
}

// Render Master
function renderApp() {
  updateNavState();
  renderLeftSidebar();
  renderRightSidebar();

  const feedControls = document.getElementById('feedControlsSection');
  const postsStream = document.getElementById('postsStream');
  const profileContainer = document.getElementById('profileViewContainer');
  const exploreContainer = document.getElementById('exploreViewContainer');

  if (state.activeView === 'feed') {
    feedControls.style.display = 'flex';
    postsStream.style.display = 'flex';
    profileContainer.style.display = 'none';
    exploreContainer.style.display = 'none';
    renderFeed();
  } else if (state.activeView === 'profile') {
    feedControls.style.display = 'none';
    postsStream.style.display = 'none';
    profileContainer.style.display = 'block';
    exploreContainer.style.display = 'none';
    renderProfile(state.profileUser || state.currentUser);
  } else if (state.activeView === 'explore') {
    feedControls.style.display = 'none';
    postsStream.style.display = 'flex';
    profileContainer.style.display = 'none';
    exploreContainer.style.display = 'block';
    renderExplore();
  }
}

function updateNavState() {
  document.querySelectorAll('.nav-btn').forEach((b) => b.classList.remove('active'));
  document.querySelectorAll('.side-nav-btn').forEach((b) => b.classList.remove('active'));

  if (state.activeView === 'feed') {
    document.getElementById('navFeedBtn').classList.add('active');
    if (state.feedMode === 'all') {
      document.getElementById('sideNavAllBtn').classList.add('active');
    } else {
      document.getElementById('sideNavFollowingBtn').classList.add('active');
    }
  } else if (state.activeView === 'explore') {
    document.getElementById('navExploreBtn').classList.add('active');
    document.getElementById('sideNavExploreBtn').classList.add('active');
  } else if (state.activeView === 'profile') {
    document.getElementById('navProfileBtn').classList.add('active');
    document.getElementById('sideNavProfileBtn').classList.add('active');
  }
}

// Render Left Sidebar
function renderLeftSidebar() {
  const me = state.currentUser;
  if (!me) return;

  document.getElementById('leftUserAvatar').src = me.avatarUrl;
  document.getElementById('leftUserName').textContent = me.displayName;
  document.getElementById('leftUserHandle').textContent = me.handle;
  document.getElementById('leftUserBio').textContent = me.bio || '';
  document.getElementById('leftFollowingCount').textContent = me.followingCount;
  document.getElementById('leftFollowersCount').textContent = me.followersCount;
  document.getElementById('sideFollowingBadge').textContent = me.followingCount;

  document.getElementById('composerAvatar').src = me.avatarUrl;
  document.getElementById('modalComposerAvatar').src = me.avatarUrl;

  // Header select
  const select = document.getElementById('personaSelect');
  select.innerHTML = '';
  state.allUsers.forEach((u) => {
    const opt = document.createElement('option');
    opt.value = u.id;
    opt.textContent = `${u.displayName} (${u.handle})`;
    if (u.id === me.id) opt.selected = true;
    select.appendChild(opt);
  });
  const newOpt = document.createElement('option');
  newOpt.value = '__new__';
  newOpt.textContent = '+ Create New Account';
  select.appendChild(newOpt);

  // Persona list in card
  const personaList = document.getElementById('personaList');
  personaList.innerHTML = '';
  state.allUsers.forEach((u) => {
    const isCur = u.id === me.id;
    const btn = document.createElement('button');
    btn.className = 'btn-secondary';
    btn.style.width = '100%';
    btn.style.justifyContent = 'space-between';
    btn.style.background = isCur ? '#f1f5f9' : '#fff';
    btn.style.border = isCur ? '1px solid var(--accent)' : '1px solid var(--border-light)';
    btn.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px; min-width: 0;">
        <img src="${u.avatarUrl}" class="avatar-img-xs" />
        <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 0.75rem;">${u.displayName}</span>
      </div>
      ${isCur ? '<span style="font-weight: 700; font-size: 0.75rem;">✓</span>' : ''}
    `;
    btn.addEventListener('click', () => switchPersona(u.id));
    personaList.appendChild(btn);
  });
}

// Switch Persona
async function switchPersona(userId) {
  const target = state.allUsers.find((u) => u.id === userId);
  if (!target) return;

  state.currentUser = target;
  apiFetch('/me/switch', {
    method: 'POST',
    body: JSON.stringify({ userId }),
  });

  if (state.activeView === 'profile') {
    state.profileUser = target;
  }
  renderApp();
}

// Render Feed
function renderFeed() {
  const tabGlobal = document.getElementById('tabGlobalBtn');
  const tabFollowing = document.getElementById('tabFollowingBtn');

  if (state.feedMode === 'all') {
    tabGlobal.classList.add('active');
    tabFollowing.classList.remove('active');
  } else {
    tabGlobal.classList.remove('active');
    tabFollowing.classList.add('active');
  }

  // Active filter badge
  const filterBar = document.getElementById('activeFilterBar');
  const filterLabel = document.getElementById('activeFilterLabel');
  if (state.selectedTag || state.searchQuery) {
    filterBar.style.display = 'flex';
    filterLabel.textContent = `Active Filter: ${state.selectedTag ? '#' + state.selectedTag : ''} ${state.searchQuery ? '"' + state.searchQuery + '"' : ''}`;
  } else {
    filterBar.style.display = 'none';
  }

  // Filter posts
  let displayPosts = [...state.posts];
  if (state.feedMode === 'following') {
    const allowed = new Set([...state.currentUser.followingIds, state.currentUser.id]);
    displayPosts = displayPosts.filter((p) => allowed.has(p.authorId));
  }
  if (state.selectedTag) {
    const lower = state.selectedTag.toLowerCase().replace(/^#/, '');
    displayPosts = displayPosts.filter((p) => p.tags?.some((t) => t.toLowerCase() === lower));
  }
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    displayPosts = displayPosts.filter(
      (p) =>
        p.content.toLowerCase().includes(q) ||
        p.tags?.some((t) => t.toLowerCase().includes(q)) ||
        p.author?.displayName.toLowerCase().includes(q)
    );
  }

  const postsStream = document.getElementById('postsStream');
  postsStream.innerHTML = '';

  if (displayPosts.length === 0) {
    postsStream.innerHTML = `
      <div class="card" style="text-align: center; padding: 40px 20px;">
        <h4 style="font-weight: 700; margin-bottom: 6px;">No posts found</h4>
        <p style="font-size: 0.75rem; color: var(--text-muted); max-width: 320px; margin: 0 auto 16px;">
          ${state.feedMode === 'following' ? "You aren't following anyone who has posted yet. Follow people on the right to see their updates!" : 'Try clearing your filters or create a new post.'}
        </p>
        <button class="btn-primary" onclick="state.feedMode='all'; state.selectedTag=null; state.searchQuery=''; renderApp();">Reset to Global Feed</button>
      </div>
    `;
    return;
  }

  displayPosts.forEach((post) => {
    postsStream.appendChild(createPostCardElement(post));
  });
}

// Create Post Card DOM Element
function createPostCardElement(post) {
  const author = post.author || state.allUsers.find((u) => u.id === post.authorId) || {
    displayName: 'Creator',
    handle: '@user',
    avatarUrl: 'assets/images/avatar_alex_chen_1792218186303.jpg',
  };

  const isLiked = post.likes?.includes(state.currentUser.id);
  const isAuthorMe = post.authorId === state.currentUser.id;
  const isFollowingAuthor = state.currentUser.followingIds?.includes(post.authorId);

  const card = document.createElement('article');
  card.className = 'post-card';
  card.id = `post-${post.id}`;

  const tagsHtml = (post.tags || [])
    .map((t) => `<button class="tag-btn" onclick="state.selectedTag='${t}'; state.activeView='feed'; renderApp();">#${t}</button>`)
    .join(' ');

  const mediaHtml = post.mediaUrl
    ? `<div class="post-media-box"><img src="${post.mediaUrl}" class="post-media-img" alt="Media" /></div>`
    : '';

  card.innerHTML = `
    <div class="post-header">
      <div class="post-author-lockup">
        <img src="${author.avatarUrl}" class="avatar-img-sm" style="cursor: pointer;" onclick="openUserProfile('${author.id}')" />
        <div>
          <div class="post-author-meta">
            <span class="post-author-name" onclick="openUserProfile('${author.id}')">${author.displayName}</span>
            <span class="user-handle">${author.handle}</span>
            <span style="color: var(--border-hover);">·</span>
            <span class="post-timestamp">${formatTime(post.createdAt)}</span>
          </div>
          ${author.bio ? `<p style="font-size: 0.7rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 320px;">${author.bio}</p>` : ''}
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 8px;">
        ${!isAuthorMe ? `
          <button class="btn-secondary" style="font-size: 0.7rem; padding: 4px 8px;" onclick="toggleFollow('${author.id}')">
            ${isFollowingAuthor ? '✓ Following' : '+ Follow'}
          </button>
        ` : `
          <button style="background: none; border: none; color: var(--text-subtle); cursor: pointer; padding: 4px;" onclick="deletePost('${post.id}')" title="Delete post">🗑️</button>
        `}
      </div>
    </div>

    <div class="post-body">${post.content}</div>
    ${tagsHtml ? `<div class="post-tags">${tagsHtml}</div>` : ''}
    ${mediaHtml}

    <div class="post-footer">
      <div class="post-action-group">
        <button class="action-btn ${isLiked ? 'liked' : ''}" onclick="toggleLike('${post.id}')">
          <span>${isLiked ? '❤️' : '🤍'}</span>
          <span>${post.likes?.length || 0}</span>
        </button>
        <button class="action-btn" onclick="toggleComments('${post.id}')">
          <span>💬</span>
          <span>${post.commentsCount || 0}</span>
        </button>
      </div>
      <button class="action-btn" onclick="copyPostLink('${post.id}')">
        <span>🔗 Share</span>
      </button>
    </div>

    <div class="comments-container" id="comments-${post.id}" style="${state.expandedComments.has(post.id) ? 'display: flex;' : 'display: none;'}">
      <!-- comments rendered here -->
    </div>
  `;

  if (state.expandedComments.has(post.id)) {
    renderCommentsSection(post.id, card.querySelector(`#comments-${post.id}`));
  }

  return card;
}

// Toggle Like
async function toggleLike(postId) {
  const post = state.posts.find((p) => p.id === postId);
  if (!post) return;

  const myId = state.currentUser.id;
  const hasLiked = post.likes.includes(myId);

  if (hasLiked) {
    post.likes = post.likes.filter((id) => id !== myId);
  } else {
    post.likes.push(myId);
  }

  // Update card in DOM
  renderApp();

  apiFetch(`/posts/${postId}/like`, { method: 'POST' });
}

// Toggle Follow
async function toggleFollow(targetUserId) {
  const me = state.currentUser;
  const target = state.allUsers.find((u) => u.id === targetUserId);
  if (!me || !target || me.id === targetUserId) return;

  const isFollowing = me.followingIds.includes(targetUserId);

  if (isFollowing) {
    me.followingIds = me.followingIds.filter((id) => id !== targetUserId);
    target.followersCount = Math.max(0, target.followersCount - 1);
  } else {
    me.followingIds.push(targetUserId);
    target.followersCount += 1;
  }
  me.followingCount = me.followingIds.length;

  renderApp();

  apiFetch(`/users/${targetUserId}/follow`, { method: 'POST' });
}

// Delete Post
async function deletePost(postId) {
  if (!confirm('Are you sure you want to delete this post?')) return;
  state.posts = state.posts.filter((p) => p.id !== postId);
  renderApp();
  apiFetch(`/posts/${postId}`, { method: 'DELETE' });
}

// Toggle Comments
async function toggleComments(postId) {
  if (state.expandedComments.has(postId)) {
    state.expandedComments.delete(postId);
  } else {
    state.expandedComments.add(postId);
  }
  renderApp();
}

// Render Comments Section
async function renderCommentsSection(postId, container) {
  if (!container) return;

  let comments = state.commentsCache[postId];
  if (!comments) {
    const fetched = await apiFetch(`/posts/${postId}/comments`);
    if (fetched && fetched.length) {
      comments = fetched.map((c) => ({
        ...c,
        author: state.allUsers.find((u) => u.id === c.authorId),
      }));
    } else {
      comments = DEFAULT_COMMENTS.filter((c) => c.postId === postId).map((c) => ({
        ...c,
        author: state.allUsers.find((u) => u.id === c.authorId),
      }));
    }
    state.commentsCache[postId] = comments;
  }

  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-weight: 700; margin-bottom: 4px;">
      <span>Comments (${comments.length})</span>
      <span style="font-size: 0.65rem; color: var(--text-subtle);">Thread</span>
    </div>
    <div style="display: flex; flex-direction: column; gap: 8px;">
      ${comments.length === 0 ? '<div style="font-size: 0.75rem; color: var(--text-muted); font-style: italic;">No comments yet.</div>' : ''}
      ${comments.map((c) => {
        const cAuthor = c.author || state.allUsers.find((u) => u.id === c.authorId) || { displayName: 'User', avatarUrl: 'assets/images/avatar_alex_chen_1792218186303.jpg' };
        const isMyComment = c.authorId === state.currentUser.id;
        return `
          <div class="comment-row">
            <div style="display: flex; gap: 8px; align-items: flex-start; min-width: 0;">
              <img src="${cAuthor.avatarUrl}" class="avatar-img-xs" />
              <div>
                <div style="display: flex; gap: 6px; align-items: center; font-size: 0.75rem;">
                  <strong style="cursor: pointer;" onclick="openUserProfile('${cAuthor.id}')">${cAuthor.displayName}</strong>
                  <span style="color: var(--text-subtle); font-family: var(--font-mono); font-size: 0.7rem;">${formatTime(c.createdAt)}</span>
                </div>
                <p style="font-size: 0.75rem; color: #475569; margin-top: 2px;">${c.content}</p>
              </div>
            </div>
            ${isMyComment ? `<button style="background: none; border: none; color: var(--text-subtle); cursor: pointer; font-size: 0.75rem;" onclick="deleteComment('${postId}', '${c.id}')">✕</button>` : ''}
          </div>
        `;
      }).join('')}
    </div>

    <form onsubmit="handleAddCommentSubmit(event, '${postId}')" class="comment-input-row" style="margin-top: 6px;">
      <img src="${state.currentUser.avatarUrl}" class="avatar-img-xs" />
      <input type="text" id="commentInput-${postId}" class="comment-input" placeholder="Write a comment..." required />
      <button type="submit" class="btn-primary" style="padding: 6px 12px; font-size: 0.7rem;">Send</button>
    </form>
  `;
}

// Add Comment
async function handleAddCommentSubmit(e, postId) {
  e.preventDefault();
  const input = document.getElementById(`commentInput-${postId}`);
  const content = input.value.trim();
  if (!content) return;

  const newComment = {
    id: `c_${Date.now()}`,
    postId,
    authorId: state.currentUser.id,
    content,
    createdAt: new Date().toISOString(),
    author: state.currentUser,
  };

  if (!state.commentsCache[postId]) state.commentsCache[postId] = [];
  state.commentsCache[postId].push(newComment);

  const post = state.posts.find((p) => p.id === postId);
  if (post) post.commentsCount = (post.commentsCount || 0) + 1;

  input.value = '';
  renderApp();

  apiFetch(`/posts/${postId}/comments`, {
    method: 'POST',
    body: JSON.stringify({ content }),
  });
}

// Delete Comment
async function deleteComment(postId, commentId) {
  if (state.commentsCache[postId]) {
    state.commentsCache[postId] = state.commentsCache[postId].filter((c) => c.id !== commentId);
  }
  const post = state.posts.find((p) => p.id === postId);
  if (post) post.commentsCount = Math.max(0, (post.commentsCount || 1) - 1);

  renderApp();
  apiFetch(`/comments/${commentId}`, { method: 'DELETE' });
}

// Share post
function copyPostLink(postId) {
  navigator.clipboard.writeText(`${window.location.href.split('#')[0]}#post-${postId}`);
  alert('Post link copied to clipboard!');
}

// Render User Profile View
function renderProfile(user) {
  const container = document.getElementById('profileViewContainer');
  const isMe = user.id === state.currentUser.id;
  const isFollowing = state.currentUser.followingIds.includes(user.id);
  const userPosts = state.posts.filter((p) => p.authorId === user.id);

  container.innerHTML = `
    <div class="profile-view">
      <div class="profile-banner"></div>
      <div class="profile-content">
        <div class="profile-header-row">
          <img src="${user.avatarUrl}" class="profile-avatar-big" alt="${user.displayName}" />
          <div>
            ${isMe ? `
              <button class="btn-secondary" onclick="openEditProfileModal()">✏️ Edit Profile</button>
            ` : `
              <button class="btn-primary" onclick="toggleFollow('${user.id}')">
                ${isFollowing ? '✓ Following' : '+ Follow'}
              </button>
            `}
          </div>
        </div>

        <h1 style="font-size: 1.3rem; font-weight: 800;">${user.displayName}</h1>
        <p class="user-handle">${user.handle}</p>
        <p style="font-size: 0.8125rem; color: #334155; margin-top: 10px; line-height: 1.5;">${user.bio || ''}</p>

        <div class="profile-meta-list">
          ${user.location ? `<span>📍 ${user.location}</span>` : ''}
          ${user.website ? `<span>🌐 <a href="${user.website}" target="_blank" style="color: var(--text-main);">${user.website.replace(/^https?:\/\//, '')}</a></span>` : ''}
          <span>📅 ${user.joinedDate || 'Joined 2024'}</span>
        </div>

        <div class="profile-stats-row">
          <span style="cursor: pointer;" onclick="openFollowList('following', state.profileUser)">
            <strong class="stat-num">${user.followingCount}</strong> <span class="stat-label">Following</span>
          </span>
          <span style="cursor: pointer;" onclick="openFollowList('followers', state.profileUser)">
            <strong class="stat-num">${user.followersCount}</strong> <span class="stat-label">Followers</span>
          </span>
          <span>
            <strong class="stat-num">${userPosts.length}</strong> <span class="stat-label">Posts</span>
          </span>
        </div>
      </div>
    </div>

    <div style="margin-top: 20px; display: flex; flex-direction: column; gap: 16px;">
      <h3 style="font-size: 0.875rem; font-weight: 700;">Posts by ${user.displayName}</h3>
      ${userPosts.length === 0 ? '<div class="card" style="font-size: 0.75rem; color: var(--text-muted); text-align: center;">No posts yet.</div>' : ''}
      <div id="profilePostsStream" style="display: flex; flex-direction: column; gap: 16px;"></div>
    </div>
  `;

  const stream = document.getElementById('profilePostsStream');
  userPosts.forEach((post) => {
    stream.appendChild(createPostCardElement(post));
  });
}

function openUserProfile(userId) {
  const user = state.allUsers.find((u) => u.id === userId);
  if (!user) return;
  state.profileUser = user;
  switchView('profile');
}

// Render Explore View
function renderExplore() {
  const grid = document.getElementById('exploreTopicGrid');
  const topics = [
    { tag: 'architecture', title: 'Architecture', count: 'Concrete & form' },
    { tag: 'photography', title: 'Photography', count: '35mm & landscape' },
    { tag: 'systems', title: 'Systems', count: 'Architecture & graph' },
    { tag: 'design', title: 'Design', count: 'Typography & craft' },
    { tag: 'minimalism', title: 'Minimalism', count: 'Pure structures' },
    { tag: 'film', title: 'Film Lab', count: 'Grain & analog' },
  ];

  grid.innerHTML = topics.map((t) => `
    <button class="btn-secondary" style="flex-direction: column; align-items: flex-start; padding: 12px; gap: 4px;" onclick="state.selectedTag='${t.tag}'; switchView('feed');">
      <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">#${t.tag}</span>
      <strong style="font-size: 0.8rem;">${t.title}</strong>
      <span style="font-size: 0.65rem; color: var(--text-subtle);">${t.count}</span>
    </button>
  `).join('');

  // Also render media posts below
  const postsStream = document.getElementById('postsStream');
  postsStream.innerHTML = '<h3 style="font-size: 0.875rem; font-weight: 700; margin-top: 10px;">Visual Showcase</h3>';
  const mediaPosts = state.posts.filter((p) => p.mediaUrl);
  mediaPosts.forEach((p) => postsStream.appendChild(createPostCardElement(p)));
}

// Render Right Sidebar
function renderRightSidebar() {
  const whoList = document.getElementById('whoToFollowList');
  whoList.innerHTML = '';
  const others = state.allUsers.filter((u) => u.id !== state.currentUser.id);

  others.forEach((u) => {
    const isFollowing = state.currentUser.followingIds.includes(u.id);
    const item = document.createElement('div');
    item.style.display = 'flex';
    item.style.alignItems = 'center';
    item.style.justifyContent = 'space-between';
    item.style.gap = '8px';
    item.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px; min-width: 0; cursor: pointer;" onclick="openUserProfile('${u.id}')">
        <img src="${u.avatarUrl}" class="avatar-img-sm" />
        <div style="min-width: 0;">
          <div style="font-size: 0.75rem; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${u.displayName}</div>
          <div style="font-size: 0.65rem; color: var(--text-subtle); font-family: var(--font-mono);">${u.handle}</div>
        </div>
      </div>
      <button class="btn-secondary" style="font-size: 0.7rem; padding: 4px 8px; shrink-0;" onclick="toggleFollow('${u.id}')">
        ${isFollowing ? 'Following' : '+ Follow'}
      </button>
    `;
    whoList.appendChild(item);
  });

  // Trending Topics
  const topicCounts = {};
  state.posts.forEach((p) => {
    p.tags?.forEach((t) => {
      topicCounts[t] = (topicCounts[t] || 0) + 1;
    });
  });

  const trendingList = document.getElementById('trendingTopicsList');
  trendingList.innerHTML = Object.entries(topicCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([tag, count]) => `
      <button class="side-nav-btn" style="padding: 6px 10px; font-size: 0.75rem;" onclick="state.selectedTag='${tag}'; switchView('feed');">
        <span>#${tag}</span>
        <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-subtle);">${count} ${count === 1 ? 'post' : 'posts'}</span>
      </button>
    `)
    .join('');
}

// Modal Management
function openModal(id) {
  document.getElementById(id).style.display = 'flex';
}
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

function openCreatePostModal() {
  const container = document.getElementById('presetPhotoOptions');
  const presets = [
    { label: 'Architecture', url: 'assets/images/post_architecture_minimal_1792218188837.jpg' },
    { label: 'Nordic Lake', url: 'assets/images/post_nature_nordic_1792218188049.jpg' },
  ];

  container.innerHTML = presets.map((p) => `
    <button type="button" class="btn-secondary" style="font-size: 0.7rem; gap: 6px; padding: 4px;" onclick="selectPostImage('${p.url}')">
      <img src="${p.url}" style="width: 24px; height: 24px; object-fit: cover; border-radius: 4px;" />
      <span>${p.label}</span>
    </button>
  `).join('');

  state.selectedPostImage = '';
  document.getElementById('postContentInput').value = '';
  document.getElementById('postCustomMediaInput').value = '';
  document.getElementById('postTagsInput').value = '';
  openModal('createPostModal');
}

function selectPostImage(url) {
  state.selectedPostImage = url;
  document.getElementById('postCustomMediaInput').value = url;
}

async function handleCreatePostSubmit(e) {
  e.preventDefault();
  const content = document.getElementById('postContentInput').value.trim();
  const mediaUrl = document.getElementById('postCustomMediaInput').value.trim() || state.selectedPostImage;
  const tagsRaw = document.getElementById('postTagsInput').value;
  const tags = tagsRaw.split(/[\s,]+/).map((t) => t.replace(/^#/, '').toLowerCase()).filter(Boolean);

  if (!content) return;

  const newPost = {
    id: `p_${Date.now()}`,
    authorId: state.currentUser.id,
    content,
    mediaUrl: mediaUrl || undefined,
    tags,
    createdAt: new Date().toISOString(),
    likes: [],
    commentsCount: 0,
    author: state.currentUser,
  };

  state.posts.unshift(newPost);
  closeModal('createPostModal');
  renderApp();

  apiFetch('/posts', {
    method: 'POST',
    body: JSON.stringify({
      content,
      mediaUrl: mediaUrl || undefined,
      tags,
    }),
  });
}

function openEditProfileModal() {
  const me = state.currentUser;
  document.getElementById('editDisplayName').value = me.displayName;
  document.getElementById('editBio').value = me.bio || '';
  document.getElementById('editLocation').value = me.location || '';
  document.getElementById('editWebsite').value = me.website || '';
  openModal('editProfileModal');
}

async function handleEditProfileSubmit(e) {
  e.preventDefault();
  const me = state.currentUser;
  me.displayName = document.getElementById('editDisplayName').value.trim();
  me.bio = document.getElementById('editBio').value.trim();
  me.location = document.getElementById('editLocation').value.trim();
  me.website = document.getElementById('editWebsite').value.trim();

  closeModal('editProfileModal');
  renderApp();

  apiFetch(`/users/${me.id}`, {
    method: 'PUT',
    body: JSON.stringify({
      displayName: me.displayName,
      bio: me.bio,
      location: me.location,
      website: me.website,
    }),
  });
}

function generateVanillaFollowers(total = 1284, baseUsers = []) {
  const result = [];
  const firsts = ['Aarav', 'Aditi', 'Ananya', 'Arjun', 'Bhavya', 'Deepa', 'Divya', 'Harish', 'Ishaan', 'Kavya', 'Madhav', 'Meera', 'Neha', 'Nikhil', 'Pooja', 'Pranav', 'Rahul', 'Riya', 'Rohan', 'Sai', 'Sanjana', 'Siddharth', 'Sneha', 'Swati', 'Tanvi', 'Varun', 'Vikrant', 'Yash', 'Zoya', 'Chloe', 'Lucas', 'Emma', 'Daniel', 'Sophia', 'Liam', 'Olivia', 'Ethan', 'Maya', 'Noah'];
  const lasts = ['Sharma', 'Reddy', 'Patel', 'Verma', 'Iyer', 'Rao', 'Gupta', 'Kulkarni', 'Chatterjee', 'Mehta', 'Joshi', 'Nair', 'Bhat', 'Das', 'Sen', 'Menon', 'Kumar', 'Pillai', 'Choudhury', 'Chen', 'Kim', 'Tanaka', 'Müller', 'O\'Connor', 'Smith'];
  const roles = [
    'Software Engineer @TCS | React & Node.js',
    'Frontend Developer @Infosys | UI/UX & Tailwind',
    'B.Tech CSE student @IIT Hyderabad | Open Source Contributor',
    'Full-Stack Developer @Cognizant | TypeScript & Express',
    'UI/UX Designer | Building clean design systems',
    'Cloud & DevOps Engineer | AWS, Docker, Kubernetes',
    'Web Development Intern @CodeAlpha | JavaScript enthusiast',
    'Backend Engineer @Wipro | Distributed databases & microservices',
  ];
  const avatars = [
    'assets/images/avatar_sruthi_namburi_1792219752949.jpg',
    'assets/images/avatar_alex_chen_1792218186303.jpg',
    'assets/images/avatar_sarah_jenkins_1792218187158.jpg',
    'assets/images/avatar_marcus_vance_1792218187935.jpg',
    'assets/images/avatar_rohit_sharma_1792220017809.jpg',
    'assets/images/avatar_maya_patel_1792220017739.jpg',
    'assets/images/avatar_elena_rostova_1792220017118.jpg',
    'assets/images/avatar_david_kim_1792220017926.jpg',
  ];

  baseUsers.forEach((u) => {
    if (u.id !== 'u_sruthi') result.push(u);
  });

  for (let i = result.length + 1; i <= total; i++) {
    const fn = firsts[i % firsts.length];
    const ln = lasts[(i * 3 + 7) % lasts.length];
    const role = roles[(i * 5 + 2) % roles.length];
    const handle = `@${fn.toLowerCase()}_${ln.toLowerCase()}${i > 150 ? i : ''}`.replace(/[^a-z0-9_@]/g, '');
    result.push({
      id: `follower_${i}`,
      username: handle.replace('@', ''),
      displayName: `${fn} ${ln}`,
      handle,
      avatarUrl: avatars[i % avatars.length],
      bio: role,
      followingIds: ['u_sruthi'],
      followersCount: 150 + ((i * 37) % 2400),
      followingCount: 40 + ((i * 13) % 400),
    });
  }
  return result;
}

let followerModalVisible = 50;

function openFollowList(type, targetUser) {
  const modal = document.getElementById('followListModal');
  const title = document.getElementById('followListModalTitle');
  const content = document.getElementById('followListModalContent');

  let list = [];
  if (type === 'following') {
    list = state.allUsers.filter((u) => targetUser.followingIds.includes(u.id));
  } else {
    list = generateVanillaFollowers(targetUser.followersCount || 1284, state.allUsers);
  }

  title.textContent = `${type === 'following' ? 'Following' : 'Followers'} (${list.length.toLocaleString()} of ${targetUser.displayName})`;

  content.innerHTML = `
    <div style="margin-bottom: 12px;">
      <input type="text" id="followModalSearch" placeholder="Search ${list.length.toLocaleString()} ${type}..." class="search-input-box" style="padding: 6px 10px; font-size: 0.75rem;" />
    </div>
    <div id="followRowsContainer" style="display: flex; flex-direction: column; gap: 8px;"></div>
    ${list.length > followerModalVisible ? `
      <div style="text-align: center; padding-top: 10px;">
        <button id="loadMoreFollowersBtn" class="btn-secondary" style="font-size: 0.75rem;">Load 50 More (${(list.length - followerModalVisible).toLocaleString()} remaining)</button>
      </div>
    ` : ''}
  `;

  function renderRows(items) {
    const container = document.getElementById('followRowsContainer');
    if (!container) return;
    const slice = items.slice(0, followerModalVisible);
    container.innerHTML = slice.map((u) => {
      const isFollowing = state.currentUser.followingIds.includes(u.id);
      return `
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid var(--border-light);">
          <div style="display: flex; align-items: center; gap: 8px; cursor: pointer; min-width: 0;" onclick="closeModal('followListModal'); openUserProfile('${u.id}')">
            <img src="${u.avatarUrl}" class="avatar-img-sm" />
            <div style="min-width: 0;">
              <div style="font-size: 0.75rem; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${u.displayName}</div>
              <div style="font-size: 0.65rem; color: var(--text-subtle); font-family: var(--font-mono);">${u.handle} · ${u.followersCount.toLocaleString()} followers</div>
              ${u.bio ? `<div style="font-size: 0.65rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 260px;">${u.bio}</div>` : ''}
            </div>
          </div>
          ${u.id !== state.currentUser.id ? `
            <button class="btn-secondary" style="font-size: 0.7rem; padding: 4px 8px;" onclick="toggleFollow('${u.id}'); openFollowList('${type}', targetUser);">
              ${isFollowing ? '✓ Following' : '+ Follow'}
            </button>
          ` : ''}
        </div>
      `;
    }).join('');
  }

  renderRows(list);

  const searchInput = document.getElementById('followModalSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const filtered = list.filter((u) => u.displayName.toLowerCase().includes(q) || u.handle.toLowerCase().includes(q) || u.bio?.toLowerCase().includes(q));
      renderRows(filtered);
    });
  }

  const loadMoreBtn = document.getElementById('loadMoreFollowersBtn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      followerModalVisible += 50;
      renderRows(list);
    });
  }

  openModal('followListModal');
}

async function handleNewUserSubmit(e) {
  e.preventDefault();
  const displayName = document.getElementById('newDisplayName').value.trim();
  const username = document.getElementById('newUsername').value.trim().toLowerCase().replace(/[^a-z0-9_]/g, '');
  const bio = document.getElementById('newBio').value.trim();
  const location = document.getElementById('newLocation').value.trim();

  const newUser = {
    id: `u_${Date.now()}`,
    username,
    displayName,
    handle: `@${username}`,
    avatarUrl: 'assets/images/avatar_alex_chen_1792218186303.jpg',
    bio: bio || 'Explorer & creator.',
    location: location || 'Global',
    website: '',
    joinedDate: `Joined ${new Date().toLocaleString('en-US', { month: 'short', year: 'numeric' })}`,
    followingIds: [],
    followersCount: 0,
    followingCount: 0,
  };

  state.allUsers.push(newUser);
  state.currentUser = newUser;
  state.profileUser = newUser;

  closeModal('newUserModal');
  switchView('profile');

  apiFetch('/users', {
    method: 'POST',
    body: JSON.stringify(newUser),
  });
}

function openDbModal() {
  document.getElementById('dbUsersCount').textContent = state.allUsers.length;
  document.getElementById('dbPostsCount').textContent = state.posts.length;
  document.getElementById('dbCommentsCount').textContent = Object.values(state.commentsCache).flat().length || 6;
  const follows = state.allUsers.reduce((acc, u) => acc + (u.followingIds?.length || 0), 0);
  document.getElementById('dbFollowsCount').textContent = follows;
  openModal('dbModal');
}

async function handleResetDb() {
  if (!confirm('Reset database back to initial seed state?')) return;
  await apiFetch('/reset', { method: 'POST' });
  localStorage.removeItem('pulse_users');
  localStorage.removeItem('pulse_posts');
  location.reload();
}

// Start
document.addEventListener('DOMContentLoaded', init);
