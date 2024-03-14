
import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/antarc0y/antarc0y.github.io.git', // Update to point to your repository
        user: {
            name: 'antarc0y', // update to use your name
            email: 'yuihan980@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);