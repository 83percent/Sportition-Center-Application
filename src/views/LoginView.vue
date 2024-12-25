<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
	<main>

		<div class="title-wrap">
			<h1 class="en">SPORTITION</h1>
			<P>Sport Networking</P>
		</div>

		<div id="form-wrap">
			<div id="id-wrap" class="input-container">
				<label>
					<p>아이디</p>
					<input type="text" />
				</label>
			</div>

			<div id="pw-wrap" class="input-container">
				<label>
					<p>비밀번호</p>
					<input type="password" />
				</label>
			</div>
		</div>

		<div id="confirm-wrap">
			<button>
				<i class="material-icons">check</i>
			</button>
		</div>

		<div class="help-wrap">
			<a href="#">비밀번호를 잊어버렸나요?</a>
			<RouterLink
				:to="{
					name : 'join'
				}">
				아직 회원이 아닌가요?
			</RouterLink>
		</div>
	</main>
</template>

<style scoped lang="scss">
main {
	width: 100vw;
	height: 100vh;

	.title-wrap {
		display: flex;
		flex-direction: column;
		> h1 {
			color: #e63232;
			font-weight: 800;
		}

		> p{ 
			position: relative;
			font-weight: 700;
		}
	}

	#form-wrap {
		> .input-container {
			p {
				font-weight: 400;
			}

			input {
				background-color: #fff;
				border: none;
				border-bottom: 1px solid #00000050;
				transition: 0.1s;
				
				&:hover, &:focus {
					border-bottom: 2px solid #ff0000;
				}
			}
		}
	}

	#confirm-wrap {
		> button {
			display: flex;
			align-items: center;
			justify-content: center;
			opacity: 0.5;
			background-color: #e63232;
			color: #fff;
			border: none;
			border-radius: 50%;
			width: 3rem;
			height: 3rem;
			cursor: pointer;

			&:hover {
				opacity: 1;
				transition: 0.15s;
			}
		}
  	}

  	.help-wrap {
		display: flex;
		flex-direction: column;
		justify-content: center;
    
		> a {
			font-size: 0.85rem;
			opacity: 0.5;
			transition: 0.15s;
			margin: 0.1rem 0;
			color: #000;

			&:hover {
				opacity: 1;
			}
		}
  	}
}


/* 모바일 */
@media (max-width: 768px) {
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.title-wrap {
			align-items: center;
			> h1 {
				font-size: 3.5rem;
			}

			> p {
				top: -0.3rem;
				font-size: 1.1rem;
			}
		}

		#form-wrap {
			width: 100%;
			display: flex;
			flex-direction: column;
			margin-top: 2rem;
			margin-bottom: 2rem;
			align-items: center;
			justify-content: center;
			
			> .input-container {
				width: 60%;
				margin-bottom: 1rem;
				p {
					font-size: 0.75rem;
				}

				input {
					padding: 0.5rem 0.5rem;
					width: 15rem;
				}
			}
		}
			
		.help-wrap {
			align-items: center;
			margin-top: 1rem;
			> a {
				margin-top: 0.5rem;
			}
		}
	}
}

/* 태블릿 (화면 너비 769px ~ 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
	main {
		padding: {
			top: 2rem;
			left: 2rem;
		}

		.title-wrap {
			> h1 {
				font-size: 6rem;
			}
			> p {
				top: -0.7rem;
				font-size: 1.8rem;
			}
		}

		#form-wrap {
			margin-top: 2rem;
			> .input-container {
				margin-top: 2rem;

				input {
					padding: 0.7rem 1.2rem;
					background-color: #fff;
					width: 15rem;
					border: none;
					border-bottom: 1px solid #00000050;
					transition: 0.1s;
					
					&:hover, &:focus {
						border-bottom: 2px solid #ff0000;
					}
				}

			}
		}
		#confirm-wrap {
			margin-top: 2rem;
			margin-bottom: 2rem;
		}
	}
}

/* 데스크탑 (화면 너비 1025px 이상) */
/* 큰 화면 (4K 해상도 이상) */
@media (min-width: 1025px) {
	main {
    	padding : {
			top: 2rem;
			left: 2rem;
    	}
  	}
  	.title-wrap {
		> h1 {
			font-size: 10rem;
		}

		> p {
			font-size: 2rem;
		}
  	}

  	#form-wrap {
        
        > .input-container {
            margin-top: 2rem;
            p {
                font-size: 0.75rem;
                font-weight: 400;
                margin-bottom: 0.5rem;
            }

            input {
                padding: 0.7rem 1.2rem;
                background-color: #fff;
                width: 15rem;
                border: none;
                border-bottom: 1px solid #00000050;
                transition: 0.1s;
                
                &:hover, &:focus {
                    border-bottom: 2px solid #ff0000;
                }
            }
        }
    }

	#confirm-wrap {
        
    	margin: 2rem 0 ;

		> button {
			display: flex;
			align-items: center;
			justify-content: center;
			opacity: 0.5;
			background-color: #e63232;
			color: #fff;
			border: none;
			border-radius: 50%;
			width: 3rem;
			height: 3rem;
			cursor: pointer;

			&:hover {
				opacity: 1;
				transition: 0.15s;
			}
		}
  	}

  	.help-wrap {
		display: flex;
		flex-direction: column;
		justify-content: center;
    
		> a {
			font-size: 0.85rem;
			opacity: 0.5;
			transition: 0.15s;
			margin: 0.1rem 0;
			color: #000;

			&:hover {
				opacity: 1;
			}
		}
  	}
}

</style>

