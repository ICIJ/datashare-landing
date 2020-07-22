<template>
  <transition name="fade-in">
    <div class="user-survey-toast card rounded position-fixed" v-if="activated" :class="{ 'user-survey-toast--reduced': reduced }">
      <a class="user-survey-toast__toggler d-inline-block" @click="toggle" v-if="reduced">
        <fa icon="comment-dots" size="2x" class="text-primary" />
      </a>
      <div class="user-survey-toast__body card-body" v-if="!reduced">
        <p class="mb-4">
          Want to improve Datashare? We'd be happy to have your feedback and suggestions.
        </p>
        <div class="d-flex justify-content-end">
          <button class="btn btn-outline-light text-dark rounded mr-2" @click="toggle">
            Not now
          </button>
          <a class="btn btn-primary rounded font-weight-bold" href="" target="_blank">
            <fa icon="comment-dots" class="mr-1" />
            Answer the survey
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Cookies from 'js-cookie'
  import { faCommentDots } from '@fortawesome/free-solid-svg-icons/faCommentDots'
  import { library } from '@icij/murmur/lib/components/Fa'
  import { Fa } from '@icij/murmur'

  library.add(faCommentDots)

  export default {
    name: 'UserSurveyToast',
    components: {
      Fa
    },
    props: {
      activationDelay: {
        type: Number,
        default: 5000
      }
    },
    data () {
      return {
        activated: Cookies.get('mute_user_survey_toast'),
        reduced: Cookies.get('mute_user_survey_toast')
      }
    },
    mounted () {
      if (!this.activated) {
        setTimeout(this.activate, this.activationDelay)
      }
    },
    methods: {
      toggle () {
        if (this.reduced) {
          this.activate()
        } else {
          this.reduce()
        }
      },
      activate () {
        this.reduced = false
        this.activated = true
        Cookies.remove('mute_user_survey_toast')
      },
      reduce () {
        this.reduced = true
        this.activated = true
        Cookies.set('mute_user_survey_toast', true, { expires: 7 })
      }
    }
  }
</script>

<style lang="scss">
  @import '../variables.scss';

  .user-survey-toast {
    z-index: $zindex-tooltip;
    bottom: $spacer;
    right: $spacer;
    max-width: 440px;
    width: 100%;
    filter: drop-shadow(0 5px 10px rgba(#000, 0.1));


    @include media-breakpoint-down(xs) {
      max-width: calc(100% - #{$spacer * 2});
      filter: drop-shadow(0 5px 10px rgba(#000, 0.2));
    }

    &--reduced {
      bottom: -2px;
      filter: none;
    }

    &.fade-in-enter-active,
    &.fade-in-leave-active {
      transition: all .3s ease;
      transform: translateY(0%);
      opacity: 1;
    }

    &.fade-in-enter,
    &.fade-in-leave-to {
      transform: translateY(50%);
      opacity: 0;
    }

    &__toggler {
      cursor: pointer;
      border: $card-border-color 1px solid;
      position: absolute;
      bottom: 100%;
      right: $spacer;
      background: $card-bg;
      padding: $spacer * 0.5 $spacer;
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
      filter: drop-shadow(0 5px 10px rgba(#000, 0.1));
    }
  }
</style>
