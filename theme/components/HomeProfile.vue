<template>
  <div class="sticky profile">
    <div
      class="profile-picture"
      aria-label="themeConfig.github"
      :style="{ backgroundImage: `url(${$themeConfig.profilePicture})` }"
    />
    <div class="profile-content">
      <h1 class="site-title">
        <CoffeeIcon /> {{ $siteConfig.title }}
      </h1>
      <div class="site-description">
        {{ $siteConfig.description }} @ 
        <a target="_blank" :href="$siteConfig.workUrl" class="description-link">
          {{ $siteConfig.workName}}
        </a>
      </div>
      <nav v-if="$themeConfig.nav" class="nav">
        <ul>
          <li v-for="item in $themeConfig.nav" :key="item.link">
            <saber-link :to="item.link">
              <CornerDownRightIcon />{{ item.text }}
            </saber-link>
          </li>
        </ul>
      </nav>
      <div class="profile-meta-items">
        <div class="profile-meta-item">
          <GithubIcon />
          <a
            target="_blank"
            rel="noopener noreferrer"
            :href="`https://github.com/${$themeConfig.github}`"
            >@{{ $themeConfig.github }}</a
          >
        </div>
        <div v-if="$themeConfig.linkedin" class="profile-meta-item">
          <LinkedinIcon />
          <a
            target="_blank"
            rel="noopener noreferrer"
            :href="`https://linkedin.com/in/${$themeConfig.linkedin}`"
            >@SamPratt</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  GithubIcon,
  CoffeeIcon,
  BriefcaseIcon,
  HeartIcon,
  CornerDownRightIcon,
  LinkedinIcon
} from 'vue-feather-icons';

export default {
  components: {
    GithubIcon: GithubIcon,
    BriefcaseIcon: BriefcaseIcon,
    HeartIcon: HeartIcon,
    CornerDownRightIcon: CornerDownRightIcon,
    CoffeeIcon: CoffeeIcon,
    LinkedinIcon: LinkedinIcon
  },
};
</script>

<style scoped>
.profile {
  width: var(--profile-width);
  padding-right: 30px;
  top: 60px;
}

@media (max-width: 768px) {
  .profile {
    display: flex;
    padding-right: 0;
    width: 100%;
    position: static;
    position: initial;
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid var(--border-color);
  }

  .profile .profile-content {
    padding-left: 20px;
    width: calc(100% - 60px);
  }

  .profile .site-title {
    line-height: 1;
    margin-top: 0;
    margin-bottom: 0;
  }

  .profile .site-description {
    margin-top: 0;
  }

  .profile .profile-meta-items {
    margin-top: 10px;
  }
}

.profile-picture {
  width: 200px;
  height: 200px;
  background-color: var(--card-bg);
  background-size: cover;
  border-radius: 6px;
}

@media (max-width: 768px) {
  .profile-picture {
    width: 60px;
    height: 60px;
  }
}

.site-title {
  font-weight: 400;
  margin: 20px 0 10px 0;
  font-size: 2rem;
}

.profile-meta-items {
  margin-top: 25px;
}

.profile-meta-items a {
  color: var(--profile-link-color);
}

.profile-meta-items a:hover {
  color: var(--profile-link-hover-color);
}

.profile-meta-item {
  display: flex;
  align-items: center;
  margin-top: 3px;
}

.profile-meta-item svg {
  width: 1rem;
  height: 1rem;
  margin-right: 10px;
}

.description-link {
  color: var(--text-color);
}

.nav ul {
  margin: 20px 0 0 0;
  padding-left: 0;
  list-style: none;
}

.nav li a {
  display: flex;
  border-radius: 4px;
  align-items: center;
  color: var(--nav-link-color);
}

.nav li a:hover {
  color: var(--nav-link-hover-color);
}

.nav li a.router-link-exact-active {
  color: var(--nav-link-active-color);
}

.nav li svg {
  width: 1rem;
  height: 1rem;
  margin-right: 5px;
}
</style>
