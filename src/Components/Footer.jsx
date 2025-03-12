import React from 'react'

function Footer() {
  return (
    <footer className='w-full   p-1 mt-1 bg-transparent'>
      <div className='text-[#a8a8a8] text-[0.6em] flex flex-col items-center justify-center gap-5 mb-5 w-full sm:flex-row lg:text-[0.8em]'>
        <div className='flex gap-4 '>
          <a href="https://about.meta.com">Meta</a>
          <a href="https://about.instagram.com">About</a>
          <a href="https://about.instagram.com/blog">Blog</a>
          <a href="https://about.instagram.com/about-us/careers">Jobs</a>
          <a href="https://help.instagram.com">Help</a>
          <a href="https://developers.facebook.com/docs/instagram-platform">API</a>
          <a href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect">Privacy</a>
        </div>
        <div className='flex gap-2'>
          <a href="https://help.instagram.com/581066165581870/">Terms</a>
          <a href="https://www.instagram.com/explore/locations/">Location</a>
          <a href="https://www.instagram.com/web/lite/">Instagram Lite</a>
          <a href="https://www.threads.net">Threads</a>
          <a href="https://www.facebook.com/help/instagram/261704639352628">Contact Uploading & Non-Users</a>
          <a href="https://accountscenter.instagram.com/meta_verified/?entrypoint=web_footer">Meta Verified</a>
        </div>
      </div>
      <div className='text-[#a8a8a8] text-[0.7em] w-full flex justify-center items-center gap-5 lg:text-[0.8em]'>
        <select>
          <option value="">English</option>
        </select>
        <p>© 2025 Instagram from Meta</p>
      </div>
    </footer>
  )
}

export default Footer