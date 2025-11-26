export const Footer = () => {
  const date = new Date();

  return `
   <div>
      <p>Copyright © ${date.getFullYear()} DJ.timog. All Rights Reserved.</p>
      <p class="mailing-list">Join the Midnight <a href="#">Mailing List</a></p>
   </div>
    `;
};
