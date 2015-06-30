module.exports = function(grunt) {
  
  "grunt-autoprefixer grunt-contrib-watch grunt-contrib-connect grunt-contrib-less grunt-browserify".split(" ").forEach(function(task) {
      grunt.loadNpmTasks(task);
  });
  
  grunt.initConfig({
    less: {
      pages: {
        files: {
          "style.css": "src/style.less"
        }
      }
    },
    watch: {
      options: {
        spawn: false,
        livereload: true
      },
      less: {
        files: "src/*.less",
        tasks: ["less", "autoprefixer"]
      },
      html: {
        files: "index.html",
        tasks: []
      },
      js: {
        files: "src/*.js",
        tasks: ["browserify"]
      }
    },
    autoprefixer: {
      less: {
        src: "style.css"
      }
    },
    browserify: {
      options: {
        browserifyOptions: { debug: true }
      },
      pages: {
        files: {
          "script.js": "src/script.js"
        }
      }
    },
    connect: {
      dev: {
        options: {
          livereload: true
        },
        base: "."
      }
    }
  });
  
  grunt.registerTask("default", ["less", "autoprefixer", "browserify", "connect", "watch"]);
  
};