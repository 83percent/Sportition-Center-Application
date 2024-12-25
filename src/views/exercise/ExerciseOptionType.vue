<script setup>
import { ref } from 'vue';

const type = ref(undefined);

</script>

<template>
    <div id="option-type-wrap">
        <div class="option-type-container">
            <div class="option-type-title">
                <p>즐겨찾기</p>
            </div>
            <ul>
                <li class="selected">
                    <p>벤치프레스</p>
                </li>
                <li>
                    <p>스쿼트</p>
                </li>
            </ul>
        </div>
        <div class="option-type-container">
            <div class="option-type-title">
                <p>3대 운동</p>
            </div>
            <ul>
                <li>
                    <p>데드리프트</p>
                </li>
                <li>
                    <p>벤치프레스</p>
                </li>
                <li>
                    <p>스쿼트</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#option-type-wrap {
    padding-top: 10rem;
    width: 100%;
    height: 100%;
    max-width: 100vw;
    overflow-y: auto;

    > .option-type-container {
        margin-bottom: 2rem;

        > .option-type-title {
            display: flex;
            align-items: center;
            padding-left: 0.7rem;
            margin-bottom: 0.5rem;

            > p {
                font-size: 1rem;
            }
        }

        > ul {
            display: flex;
            margin: 0.5rem 0;

            > li {
                padding: 0.8rem 2rem;
                border: 1px solid #ccc;
                border-radius: 0.5rem;
                margin-left: 0.5rem;
                transition: 0.3s;

                > p {
                    font-size: 0.8rem;
                }

                &.selected {
                    border: 2px solid var(--color-main-green);
                    background-color: var(--color-main-green);
                    
                    
                    > p {
                        color: #fff;
                        font-weight: 600;    
                    }
                }
            }

        }
    }

}
</style>
