<template>
  <div id="details-app">
    <router-view></router-view>
  </div>

</template>

<script>
    export default {
        name: 'details',
        data() {
            return {}
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
  #details-app{
    width: 100%;
    height: 100%;
    background-color: white;
  }
  .music-content,.movie-content{
    padding-top: 3.4rem;
    background-color: white;
    .content-banner{
      position: relative;
      .banner-detail{
        position: absolute;
        left: -10rem;
        top: -11rem;
        width: 30rem;
        height: 30rem;
        border-radius: 50%;
        box-shadow: 0 0 20px 5px rgba(230,230,230,0.6);
        margin-bottom: 20px;
        .img{
          position: absolute;
          width: 26.5rem;
          display: block;
          height: 26.5rem;
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: 100;
          max-width: 100%;
          border-radius: 50%;
          overflow: hidden;
        }
      }
      .text-music-info{
        text-align: center;
        padding-top: 20rem;
        font-size: 1rem;
        >p{
          margin: 0;
          height: 1.5rem;
          line-height:1.5rem;
        }
      }
    }
    .content-body{
      padding:0 1rem;
      .content-title{
        font-size: 1.65rem;
        font-weight: bold;
        margin:1rem 0 ;
        &::after{
          content: '';
          display: block;
          width: 80px;
          margin-top: 1rem;
          height: 5px;
          line-height: 10px;
          background-color: black;
        }
      }
      .text-author{
        padding-left:.5rem;
        color: #555;
        font-size: .8rem;
        margin-bottom: 2.5rem;
      }
      .text-content{
        font-size: 1rem;
        >br{
          display: none;
        }
        >p{
          line-height: 1.5rem;
          margin-bottom: 1rem;
        }
        p.fr-ft-ns{
          font-size: .78rem;
        }
        .one-img-container{
          display: none;
        }
        img{
          width: 100%;
          max-width: 100%;
        }
      }
      .text-tip{
        margin-top: 2rem;
        .text-editor{
          display: block;
          font-size: .85rem;
          line-height: 1.8rem;
          height: 1.8rem;
          color: #888;
        }
      }
      .content-author{
        margin-top: 1rem;
        margin-bottom: .5rem;
        .author-title{
          height: 2.5rem;
          line-height: 2.5rem;
          margin:0 0 .8rem 0;
          position: relative;
          &::after{
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            height: 3px;
            width: 100px;
            background-color: black;
          }
        }
        .author-content{
          display: table;
          height: 4rem;
          line-height: 4rem;
          img{
            display: table-cell;
            width: 3rem;
            vertical-align: middle;
            height: 3rem;
            border-radius: 50%;
          }
          .author{
            display: table-cell;
            padding-left:.6rem;
            vertical-align: top;
            >p{
              margin:0;
              line-height: 1.5rem;
            }
            .author-name{
              height:1.5rem;
              font-size: .9rem;
              color: #333;
            }
            .page-summary{
              font-size: .8rem;
              color: #888;
            }
          }
        }
      }
    }
    .btn-backtop{
      background-color: rgba(0,0,0,.5);
      display: inline-block;
      width: 3.5rem;
      text-align: center;
      line-height: 3.5rem;
      height:3.5rem;
      border-radius: 50%;
      padding:0;
      font-size: 1.5rem;
    }
    .end-tip{
      text-align: center;
      height: 3rem;
      line-height:3rem;
      font-size: 1rem;
      color: #888;
    }
  }
</style>
