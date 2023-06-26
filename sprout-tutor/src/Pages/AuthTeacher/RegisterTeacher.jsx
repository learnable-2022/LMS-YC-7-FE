import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./RegisterTeacher.scss";
// import NavigateButton from "../../Components/NavigateButton/NavigateButton";
import { ConnectButton } from "@rainbow-me/rainbowkit";
ConnectButton;

const RegisterTeacher = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");

  const [active, setActive] = useState(1);
  console.log("active", active);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/Login");
    }
  }, [navigate]);

  const CreateAccount = () => {
    // e.preventDefault();
    console.log("hello");
    fetch("https://sprout-tutor.onrender.com/api/v1/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: Name,
        email: Email,
        password: Password,
      }),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result, "result");
        if (result) {
          alert("YOU ARE NOW registered. Thank U.");
          // navigate("/Login");
        } else {
          alert("Please check your login information.");
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  return (
    <div className="main">
      <div className="main-image-ctn">
        <img src="/assets/image 4.png" />
      </div>
      <div className="container">
        <div className="logo-ctn">
          <svg
            width="322"
            height="61"
            viewBox="0 0 322 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
<<<<<<< HEAD
import NavigateButton from "../../Components/NavigateButton/NavigateButton";

const RegisterTeacher = () => {
    const [active, setActive] = useState(1);
    console.log("active", active);

    return (
        <div className="main">
          <div className="main-image-ctn">
            <img src="/assets/image 4.png" />
          </div>
          <div className="container">
            <div className="logo-ctn">
              <svg
                width="322"
                height="61"
                viewBox="0 0 322 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
             <path
=======

>>>>>>> 740630a6374ff1d0e80d925b25206c8df07d5b89
              d="M12.3937 49.0526H0.191605V40.8115C0.188736 40.8518 0.188736 40.8923 0.191605 40.9326C0.433034 41.7208 0.83108 42.452 1.36187 43.0825C1.73797 43.6126 2.14738 44.1183 2.58763 44.5964C3.31023 45.3667 4.12516 46.0447 5.01391 46.6151C7.22252 48.0508 9.76478 48.8904 12.3937 49.0526Z"
              fill="#2364AA"
            />
            <path
              d="M19.4453 36.7238C19.4818 37.6007 19.2476 38.4676 18.7744 39.2067C18.2982 39.8811 17.6143 40.381 16.8274 40.6298C15.8182 40.9493 14.7631 41.0994 13.705 41.0739C12.748 41.0773 11.8034 40.8579 10.9458 40.433C9.91375 39.8743 9.01132 39.1039 8.29753 38.1721C7.74269 37.4966 7.0837 36.914 6.3454 36.4462C5.74424 36.0661 5.03693 35.8892 4.3277 35.9416C3.49746 36.0667 2.7269 36.4477 2.12336 37.0316C1.46139 37.6116 0.902029 38.2992 0.46884 39.0654C0.339153 39.3185 0.245757 39.5886 0.191406 39.8678V8.99292H12.5095C10.579 9.07819 8.68829 9.57001 6.9608 10.4362C5.12719 11.3495 3.57691 12.7452 2.47645 14.4735C1.38639 16.2287 0.825906 18.2614 0.862292 20.3275C0.843713 21.4935 0.984575 22.6566 1.28097 23.7844C1.5322 24.7297 1.92507 25.6315 2.44619 26.4591C2.93575 27.2278 3.54939 27.9099 4.26212 28.4777C4.96554 29.0386 5.71091 29.5448 6.49168 29.9917C7.27249 30.4401 8.09317 30.8151 8.94319 31.112C10.1874 31.5662 11.4317 31.9783 12.6759 32.3484C13.9168 32.7017 15.0518 33.065 16.0707 33.4334C16.955 33.7318 17.7834 34.1752 18.5222 34.7455C18.8195 34.9805 19.0578 35.2818 19.2181 35.6252C19.3784 35.9687 19.4562 36.3449 19.4453 36.7238Z"
              fill="#2364AA"
            />
            <path
              d="M27.9254 8.99292V35.2704C27.8589 34.1636 27.6206 33.074 27.2192 32.0406C26.7656 30.8957 26.0863 29.8539 25.2217 28.9773C24.4018 28.1663 23.4628 27.4856 22.4372 26.9587C21.3971 26.4197 20.316 25.9641 19.2039 25.5961C17.9731 25.2227 16.7776 24.8946 15.6073 24.6171C14.4371 24.3395 13.3979 24.0216 12.4496 23.7188C11.6098 23.4613 10.8319 23.0336 10.1646 22.4622C9.87875 22.2021 9.65339 21.8825 9.50436 21.5259C9.35534 21.1693 9.28626 20.7844 9.302 20.3982C9.29515 19.9037 9.40946 19.4151 9.63492 18.975C9.85316 18.5547 10.1574 18.185 10.5278 17.89C10.9271 17.5781 11.3801 17.3421 11.8645 17.1936C12.4062 17.023 12.9712 16.9378 13.5392 16.9413C14.3573 16.9178 15.1741 17.0216 15.9604 17.2491C16.5306 17.4295 17.0674 17.7023 17.5494 18.0565C18.0134 18.4074 18.4595 18.7813 18.8861 19.1769C20.0362 19.9591 21.0702 20.272 21.9782 20.1256C22.8862 19.9793 23.8093 19.2374 24.7172 17.9354C25.6252 16.6334 25.9985 15.7553 25.8875 15.0639C25.7765 14.3726 25.2015 13.55 24.1624 12.581C23.8562 12.2433 23.5184 11.9357 23.1535 11.6626C22.5237 11.1943 21.8476 10.7919 21.1358 10.4615C20.1254 10.0033 19.0707 9.64985 17.9882 9.40674C16.9779 9.17176 15.9476 9.0332 14.9112 8.99292H27.9254Z"
              fill="#2364AA"
            />
            <path
              d="M27.9247 37.7786V49.0526H15.2031C16.3986 48.9545 17.5813 48.7381 18.7341 48.4066C20.3727 47.9394 21.9187 47.1934 23.3042 46.2013C24.7288 45.1871 25.8938 43.8504 26.704 42.3003C27.4228 40.8952 27.8387 39.3547 27.9247 37.7786Z"
              fill="#2364AA"
            />
            <path
              d="M27.2743 5.16768V5.37964H0L22.8807 0L27.2743 5.16768Z"
              fill="#FEC601"
            />
            <path d="M22.8807 0L0 5.37964L22.8807 0Z" fill="#FEC601" />
            <path
              d="M27.456 5.37964L27.2744 5.16768L22.8809 0"
              fill="#FEC601"
            />
            <path
              d="M38.7248 60.054C37.3796 60.054 36.4246 59.8589 35.8596 59.4686C35.591 59.3004 35.3591 59.0796 35.1779 58.8194C34.9967 58.5592 34.87 58.2651 34.8054 57.9547C34.6703 57.3057 34.6043 56.6443 34.6087 55.9815V24.8845C34.6041 24.2081 34.6598 23.5325 34.7751 22.8659C34.8343 22.5592 34.954 22.2673 35.1273 22.0074C35.3005 21.7474 35.5237 21.5246 35.784 21.352C36.3725 20.9112 37.3342 20.6909 38.6693 20.6909C39.6119 20.6503 40.5516 20.8228 41.4184 21.1955C42.0843 21.5192 42.6045 22.0811 42.8762 22.77V55.9209C42.9158 56.5983 42.8597 57.2778 42.7097 57.9395C42.5583 58.5659 42.1694 59.1088 41.6252 59.4535C41.0603 59.8539 40.0934 60.054 38.7248 60.054ZM49.4337 48.023C47.7719 48.0512 46.1279 47.6772 44.6417 46.933C43.2795 46.2325 42.0997 45.2233 41.1965 43.9858C40.2595 42.6832 39.5625 41.2237 39.1384 39.676C38.6637 37.9565 38.4494 36.1754 38.5028 34.3923C38.4931 32.6323 38.736 30.8801 39.2242 29.1893C39.6663 27.6187 40.3706 26.1343 41.3074 24.7988C42.1839 23.5371 43.3452 22.4997 44.6972 21.7708C46.163 21.0261 47.7901 20.6551 49.4337 20.6909C51.0818 20.6961 52.707 21.0775 54.1854 21.8061C55.7265 22.5479 57.1129 23.5754 58.2713 24.8341C59.4758 26.1287 60.4347 27.6318 61.1011 29.27C61.7823 30.9475 62.1251 32.7432 62.1099 34.5538C62.1261 36.3546 61.7831 38.1406 61.1011 39.8072C60.4451 41.41 59.4918 42.8741 58.2914 44.122C57.139 45.3222 55.7697 46.2932 54.256 46.9834C52.7425 47.6744 51.0973 48.0291 49.4337 48.023ZM48.2836 40.1807C49.2623 40.1964 50.2256 39.9358 51.063 39.4287C51.8791 38.9302 52.5586 38.2365 53.0404 37.4101C53.5412 36.5497 53.7992 35.5695 53.7869 34.5739C53.8073 33.5711 53.5582 32.5811 53.0656 31.7075C52.5938 30.8738 51.9054 30.1831 51.0734 29.7087C50.2413 29.2343 49.2966 28.9938 48.3391 29.0126C47.37 29.0077 46.4184 29.2715 45.59 29.7747C44.7726 30.2617 44.1003 30.9587 43.6429 31.7933C43.1809 32.6637 42.9418 33.6351 42.9471 34.6207C42.9524 35.6062 43.2019 36.575 43.6732 37.4404C44.1361 38.2693 44.805 38.9646 45.6152 39.459C46.4202 39.9435 47.3444 40.1934 48.2836 40.1807Z"
              fill="#2364AA"
            />
            <path
              d="M71.3203 48.5226C69.9483 48.5226 68.9748 48.3309 68.4048 47.9372C68.1294 47.7594 67.8934 47.5271 67.7113 47.2546C67.5291 46.982 67.4046 46.6751 67.3455 46.3526C67.215 45.6758 67.1508 44.9879 67.1538 44.2987V24.8845C67.1467 24.1919 67.2212 23.5008 67.3757 22.8255C67.5272 22.1992 67.9161 21.6563 68.4602 21.3116C69.0319 20.8978 70.0038 20.6908 71.3758 20.6908C72.6705 20.6908 73.6071 20.8675 74.1855 21.2207C74.6827 21.4856 75.0678 21.921 75.27 22.4471C75.4035 22.8323 75.4783 23.2355 75.4919 23.6431L74.8261 23.9762C74.9938 23.6894 75.188 23.4191 75.4062 23.1687C76.2957 22.1168 77.4479 21.3193 78.7455 20.8574C79.6285 20.5484 80.5592 20.398 81.4946 20.4133C81.9498 20.417 82.4045 20.4456 82.8565 20.4991C83.3854 20.5608 83.9073 20.6724 84.4152 20.8322C84.9327 20.9901 85.4277 21.214 85.8881 21.4983C86.3158 21.7557 86.6852 22.0994 86.9727 22.5076C87.264 22.9574 87.4102 23.4859 87.3913 24.0216C87.434 25.3873 87.0649 26.7342 86.332 27.8872C86.0631 28.3605 85.6756 28.7555 85.2077 29.0334C84.7398 29.3112 84.2077 29.4623 83.6636 29.4719C83.2133 29.4976 82.7621 29.4412 82.3319 29.3053C82.1086 29.2143 81.8941 29.1028 81.6913 28.9723C81.5069 28.8505 81.3109 28.7474 81.1062 28.6644C80.7102 28.5486 80.2974 28.5008 79.8855 28.5231C79.3475 28.5203 78.8121 28.5968 78.2965 28.7502C77.797 28.897 77.3274 29.1311 76.9094 29.4416C76.4858 29.7472 76.1402 30.1483 75.9005 30.6124C75.6588 31.0802 75.5342 31.5997 75.5373 32.1264V44.4097C75.5387 45.0874 75.4728 45.7636 75.3406 46.4283C75.2777 46.7433 75.1484 47.0412 74.9614 47.3022C74.7744 47.5633 74.534 47.7815 74.2561 47.9423C73.6743 48.3292 72.6957 48.5226 71.3203 48.5226Z"
              fill="#2364AA"
            />
            <path
              d="M103.271 48.9516C101.49 48.9503 99.7268 48.6076 98.0753 47.9423C96.3474 47.2572 94.7554 46.2695 93.374 45.0254C91.9146 43.72 90.7536 42.1152 89.9702 40.3203C89.1867 38.5254 88.7993 36.5827 88.8342 34.6244C88.8169 32.7041 89.1946 30.8008 89.9439 29.0328C90.6784 27.3186 91.735 25.7613 93.0562 24.4455C94.3769 23.1203 95.9338 22.0539 97.6465 21.3015C99.3957 20.5364 101.286 20.1479 103.195 20.161C105.744 20.1298 108.253 20.7927 110.454 22.0787C112.6 23.3423 114.389 25.1331 115.649 27.2817C116.951 29.4874 117.625 32.0075 117.597 34.5689C117.637 36.6557 117.21 38.725 116.346 40.6248C115.545 42.3445 114.412 43.8883 113.011 45.1667C111.664 46.3999 110.098 47.3719 108.396 48.0331C106.759 48.6536 105.021 48.965 103.271 48.9516ZM103.16 40.5541C104.107 40.5412 105.038 40.3134 105.884 39.888C106.824 39.4283 107.628 38.7328 108.219 37.8694C108.884 36.8669 109.216 35.6802 109.168 34.4781C109.192 33.3887 108.922 32.313 108.386 31.3643C107.88 30.4835 107.139 29.7603 106.247 29.2751C105.281 28.7605 104.199 28.5017 103.104 28.5231C102.061 28.5059 101.033 28.7765 100.133 29.3053C99.2307 29.8437 98.4857 30.6103 97.973 31.5281C97.4603 32.4458 97.1981 33.4823 97.2127 34.5336C97.1731 35.7225 97.4931 36.8956 98.1308 37.8996C98.6929 38.777 99.4922 39.477 100.436 39.9183C101.285 40.3319 102.215 40.5541 103.16 40.5693V40.5541Z"
              fill="#2364AA"
            />
            <path
              d="M135.055 48.4469C133.414 48.4567 131.79 48.1228 130.286 47.4666C128.782 46.8104 127.432 45.8464 126.323 44.6368C125.19 43.3994 124.312 41.9502 123.74 40.3724C123.112 38.6338 122.801 36.7962 122.822 34.9474V24.8543C122.815 24.1616 122.89 23.4705 123.044 22.7953C123.196 22.1586 123.584 21.6032 124.129 21.2409C124.704 20.8322 125.672 20.6252 127.044 20.6252C128.416 20.6252 129.39 20.8322 129.965 21.2409C130.237 21.4223 130.47 21.6557 130.651 21.9277C130.832 22.1997 130.957 22.5048 131.019 22.8255C131.154 23.512 131.22 24.2102 131.216 24.9098V34.9524C131.194 35.9218 131.394 36.8833 131.801 37.7634C132.166 38.5344 132.769 39.1677 133.521 39.57C134.356 39.9952 135.284 40.2051 136.22 40.1807C137.178 40.2086 138.127 39.9878 138.974 39.5398C139.721 39.1177 140.332 38.4909 140.734 37.7331C141.181 36.876 141.402 35.9188 141.375 34.9524V24.829C141.37 24.1365 141.445 23.4457 141.597 22.77C141.748 22.1437 142.137 21.6008 142.682 21.2561C143.257 20.8658 144.23 20.6707 145.602 20.6707C146.974 20.6707 147.946 20.8759 148.518 21.2863C149.064 21.6557 149.445 22.2245 149.577 22.871C149.705 23.5362 149.77 24.2121 149.769 24.8896V44.4703C149.772 45.1328 149.708 45.7939 149.577 46.4435C149.509 46.751 149.377 47.0409 149.19 47.2947C149.003 47.5484 148.766 47.7604 148.493 47.9171C147.907 48.2703 146.949 48.4469 145.617 48.4469C144.825 48.4794 144.033 48.3666 143.282 48.1139C142.807 47.9493 142.384 47.662 142.056 47.2812C141.811 46.9746 141.649 46.6094 141.587 46.2214C141.533 45.8876 141.505 45.5502 141.501 45.2121L142.248 44.6317C142.137 44.7781 141.895 45.0557 141.526 45.4644C141.076 45.9441 140.583 46.3816 140.054 46.7715C139.396 47.2615 138.677 47.6636 137.915 47.9675C137.002 48.3128 136.03 48.4757 135.055 48.4469Z"
              fill="#2364AA"
            />
            <path
              d="M169.679 41.7956C169.337 41.2812 168.809 40.9194 168.206 40.7863C167.493 40.6306 166.766 40.5562 166.037 40.5643C165.625 40.5718 165.214 40.5346 164.811 40.4532C164.52 40.4024 164.25 40.2673 164.034 40.0647C163.82 39.8197 163.675 39.5217 163.615 39.2017C163.515 38.7171 163.47 38.2228 163.479 37.7281V15.6443C163.484 14.9514 163.418 14.2598 163.283 13.5803C163.214 13.2621 163.083 12.9607 162.897 12.6938C162.711 12.4269 162.473 12.1999 162.198 12.026C161.606 11.6155 160.643 11.412 159.308 11.4153C157.973 11.4187 157.009 11.6138 156.417 12.0007C156.147 12.1604 155.912 12.3726 155.726 12.6249C155.54 12.8772 155.406 13.1643 155.333 13.4693C155.196 14.1332 155.132 14.8101 155.141 15.4879V38.0662C155.109 39.6574 155.324 41.244 155.777 42.7696C156.154 44.0013 156.834 45.1186 157.754 46.0196C158.706 46.9114 159.858 47.5605 161.114 47.9121C162.698 48.3504 164.338 48.5561 165.981 48.5227C166.657 48.5239 167.332 48.4682 167.999 48.3562C168.322 48.3008 168.63 48.1784 168.903 47.9967C169.175 47.815 169.407 47.5782 169.583 47.3014C169.996 46.7194 170.205 45.7555 170.208 44.4098C170.208 43.1834 170.027 42.3104 169.679 41.7956ZM170.763 22.2049C170.588 21.9298 170.36 21.6922 170.093 21.506C169.825 21.3197 169.523 21.1885 169.204 21.1199C168.54 20.9864 167.864 20.9222 167.187 20.9281L163.464 21.0341L159.514 21.1501H155.126V29.1641H159.903L163.434 29.2499L167.157 29.3357C167.851 29.3404 168.542 29.2556 169.215 29.0833C169.846 28.9096 170.387 28.5017 170.728 27.9428C171.121 27.3524 171.313 26.4288 171.313 25.1622C171.353 23.7962 171.17 22.8105 170.763 22.2049Z"
              fill="#2364AA"
            />
            <path
              d="M212.081 9.58845C212.66 9.58338 213.238 9.6392 213.806 9.75499C214.344 9.87995 214.812 10.2093 215.112 10.6735C215.465 11.1748 215.642 12.036 215.642 13.2573C215.713 14.1319 215.529 15.0083 215.112 15.7806C214.961 16.0223 214.762 16.2309 214.528 16.3939C214.294 16.557 214.03 16.671 213.75 16.7293C213.164 16.8433 212.567 16.8991 211.97 16.8959H203.021V44.4097C203.026 45.0876 202.96 45.7641 202.825 46.4284C202.757 46.7379 202.63 47.031 202.449 47.2909C202.268 47.5508 202.037 47.7722 201.77 47.9423C201.195 48.336 200.222 48.5277 198.85 48.5277C197.478 48.5277 196.549 48.336 195.959 47.9423C195.681 47.7748 195.443 47.5492 195.26 47.2809C195.077 47.0127 194.954 46.7081 194.9 46.388C194.788 45.721 194.732 45.0457 194.734 44.3694V16.8757H185.654C185.073 16.8773 184.494 16.8113 183.929 16.6789C183.379 16.5521 182.902 16.2128 182.602 15.7352C182.269 15.2305 182.098 14.3928 182.098 13.2119C182.098 12.031 182.269 11.1933 182.602 10.6886C182.749 10.4519 182.943 10.2481 183.172 10.09C183.401 9.93195 183.66 9.82304 183.934 9.77013C184.502 9.65781 185.08 9.60203 185.659 9.60359L212.081 9.58845Z"
              fill="#2364AA"
            />
            <path
              d="M227.526 48.447C225.885 48.4568 224.261 48.1228 222.757 47.4666C221.253 46.8104 219.904 45.8465 218.795 44.6368C217.661 43.3994 216.784 41.9502 216.212 40.3725C215.586 38.6332 215.275 36.796 215.294 34.9474V24.8543C215.289 24.1618 215.364 23.4709 215.516 22.7953C215.668 22.1587 216.055 21.6033 216.6 21.241C217.175 20.8339 218.149 20.6286 219.521 20.6253C220.893 20.6219 221.87 20.8372 222.452 21.2712C222.998 21.6406 223.378 22.2094 223.511 22.8559C223.642 23.5428 223.706 24.2408 223.703 24.9401V34.9525C223.681 35.9218 223.881 36.8834 224.288 37.7634C224.645 38.5312 225.239 39.1644 225.983 39.5701C226.815 39.9959 227.741 40.2058 228.676 40.1807C229.634 40.2086 230.583 39.9878 231.43 39.5398C232.183 39.1201 232.799 38.493 233.206 37.7331C233.653 36.876 233.873 35.9188 233.847 34.9525V24.8291C233.842 24.1365 233.916 23.4457 234.069 22.7701C234.224 22.1455 234.612 21.6039 235.153 21.2561C235.728 20.8658 236.702 20.6707 238.074 20.6707C239.446 20.6707 240.414 20.8776 240.989 21.2864C241.536 21.6557 241.916 22.2245 242.049 22.871C242.179 23.5358 242.243 24.2121 242.24 24.8896V44.4703C242.246 45.1329 242.182 45.7943 242.049 46.4435C241.98 46.7511 241.848 47.041 241.662 47.2947C241.475 47.5484 241.237 47.7604 240.964 47.9171C240.392 48.2704 239.434 48.447 238.089 48.447C237.296 48.4795 236.505 48.3666 235.753 48.1139C235.279 47.948 234.857 47.661 234.528 47.2812C234.282 46.9746 234.12 46.6094 234.058 46.2214C234.005 45.8876 233.976 45.5502 233.973 45.2121L234.699 44.6015C234.583 44.7479 234.346 45.0254 233.973 45.4342C233.523 45.9139 233.03 46.3514 232.5 46.7412C231.842 47.2313 231.123 47.6334 230.361 47.9373C229.458 48.2897 228.495 48.4628 227.526 48.447Z"
              fill="#2364AA"
            />
            <path
              d="M262.15 41.7956C261.808 41.2812 261.28 40.9194 260.677 40.7863C259.965 40.6304 259.237 40.5559 258.508 40.5643C258.097 40.5718 257.686 40.5346 257.283 40.4532C256.991 40.4024 256.721 40.2673 256.506 40.0647C256.293 39.8192 256.15 39.5212 256.092 39.2017C255.988 38.7177 255.94 38.2231 255.951 37.7281V15.6443C255.956 14.9514 255.89 14.2598 255.754 13.5803C255.686 13.2621 255.555 12.9607 255.368 12.6938C255.182 12.4269 254.945 12.1999 254.67 12.026C254.081 11.6155 253.118 11.412 251.779 11.4153C250.441 11.4187 249.477 11.6138 248.889 12.0007C248.62 12.161 248.385 12.3735 248.199 12.6257C248.013 12.8778 247.879 13.1646 247.804 13.4693C247.67 14.1336 247.606 14.8102 247.613 15.4879V38.0662C247.581 39.6574 247.795 41.244 248.248 42.7696C248.626 44.0013 249.305 45.1186 250.226 46.0196C251.178 46.9124 252.333 47.5617 253.59 47.9121C255.173 48.3504 256.811 48.5561 258.453 48.5227C259.129 48.5241 259.804 48.4684 260.471 48.3562C260.794 48.3008 261.101 48.1784 261.374 47.9967C261.647 47.815 261.879 47.5782 262.055 47.3014C262.471 46.7194 262.678 45.7555 262.675 44.4098C262.675 43.1834 262.503 42.3104 262.15 41.7956ZM263.235 22.2049C263.06 21.9298 262.832 21.6922 262.564 21.506C262.297 21.3197 261.995 21.1885 261.676 21.1199C261.012 20.9864 260.336 20.9222 259.658 20.9281L255.936 21.0341L251.986 21.1501H247.598V29.1641H252.375L255.936 29.2499L259.658 29.3357C260.352 29.3404 261.044 29.2556 261.717 29.0833C262.348 28.9096 262.889 28.5017 263.23 27.9428C263.681 27.0888 263.883 26.1255 263.815 25.1622C263.835 23.7962 263.642 22.8105 263.235 22.2049Z"
              fill="#2364AA"
            />
            <path
              d="M282.448 48.9516C280.667 48.9503 278.904 48.6076 277.252 47.9423C275.524 47.2572 273.932 46.2695 272.551 45.0254C271.091 43.72 269.93 42.1152 269.147 40.3203C268.363 38.5254 267.976 36.5826 268.011 34.6244C267.994 32.7041 268.371 30.8008 269.121 29.0328C269.855 27.3186 270.912 25.7613 272.233 24.4455C273.554 23.1203 275.111 22.0539 276.823 21.3015C278.572 20.5364 280.463 20.1479 282.372 20.161C284.921 20.1298 287.43 20.7927 289.631 22.0787C291.777 23.3423 293.565 25.1331 294.826 27.2817C296.128 29.4874 296.801 32.0075 296.773 34.5689C296.814 36.6557 296.386 38.725 295.522 40.6248C294.722 42.3458 293.587 43.8898 292.183 45.1667C290.82 46.3936 289.239 47.3539 287.522 47.9978C285.903 48.6242 284.183 48.9475 282.448 48.9516ZM282.337 40.5541C283.283 40.5412 284.215 40.3134 285.061 39.888C286 39.4283 286.805 38.7328 287.396 37.8693C288.061 36.8669 288.393 35.6802 288.344 34.4781C288.368 33.3887 288.098 32.313 287.562 31.3643C287.056 30.4835 286.316 29.7603 285.424 29.2751C284.457 28.7605 283.376 28.5017 282.281 28.5231C281.238 28.5059 280.21 28.7765 279.31 29.3053C278.407 29.8437 277.662 30.6103 277.15 31.5281C276.637 32.4458 276.375 33.4823 276.389 34.5336C276.347 35.7228 276.668 36.8967 277.308 37.8996C277.87 38.777 278.669 39.477 279.613 39.9183C280.462 40.3319 281.392 40.5541 282.337 40.5693V40.5541Z"
              fill="#2364AA"
            />
            <path
              d="M305.929 48.5227C304.557 48.5227 303.588 48.3309 303.013 47.9373C302.738 47.7595 302.502 47.5272 302.32 47.2546C302.138 46.9821 302.013 46.6752 301.954 46.3527C301.823 45.6759 301.759 44.988 301.762 44.2987V24.8846C301.755 24.1919 301.83 23.5009 301.984 22.8256C302.136 22.1993 302.524 21.6564 303.069 21.3116C303.664 20.9079 304.612 20.6909 305.984 20.6909C307.279 20.6909 308.215 20.8676 308.794 21.2208C309.291 21.4857 309.676 21.9211 309.878 22.4471C310.012 22.8324 310.087 23.2356 310.1 23.6432L309.435 23.9762C309.602 23.6895 309.796 23.4192 310.015 23.1688C310.76 22.2846 311.694 21.5784 312.747 21.1016C313.8 20.6249 314.947 20.3897 316.103 20.4134C316.558 20.4171 317.013 20.4457 317.465 20.4992C317.994 20.5604 318.516 20.6719 319.024 20.8322C319.541 20.9902 320.036 21.2141 320.497 21.4984C320.924 21.7558 321.294 22.0995 321.581 22.5077C321.872 22.9575 322.019 23.486 322 24.0217C322.042 25.3874 321.673 26.7343 320.94 27.8873C320.678 28.364 320.295 28.7637 319.831 29.047C319.366 29.3302 318.836 29.4872 318.292 29.5022C317.842 29.528 317.391 29.4716 316.961 29.3357C316.737 29.2447 316.523 29.1332 316.32 29.0026C316.136 28.8809 315.94 28.7777 315.735 28.6948C315.339 28.5789 314.926 28.5312 314.514 28.5535C313.978 28.5503 313.444 28.6268 312.93 28.7806C312.429 28.9263 311.957 29.1604 311.538 29.4719C311.114 29.7775 310.769 30.1786 310.529 30.6427C310.287 31.1106 310.163 31.6301 310.166 32.1567V44.4098C310.167 45.0875 310.101 45.7637 309.969 46.4284C309.907 46.743 309.779 47.0408 309.593 47.3018C309.407 47.5629 309.167 47.7813 308.89 47.9424C308.288 48.3293 307.301 48.5227 305.929 48.5227Z"
              fill="#2364AA"
            />
          </svg>
          </div>
          <div className="title-ctn">
          <h2 className="title-header">Create an account</h2>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Log in</Link>
            </span>
          </p>
        </div>
        <div className="auth-phase-ctn">
          <div className="auth-phase-icon-ctn">
            <div className={active === 1 ? " active" : ""}>
              <p className="auth-phase-no ">1</p>
            </div>
            <div className={active === 2 ? " active" : ""}>
              <p className="auth-phase-no ">2</p>
            </div>
            <div className={active === 3 ? " active" : ""}>
              {" "}
              <p className="auth-phase-no  ">3</p>
            </div>
          </div>
          <div className="auth-phase--ctn">
            <p className={active === 1 ? "active" : " "}>
              Enter your email address
            </p>
            <p className={active === 2 ? "active" : ""}>
              Provide your basic info
            </p>
            <p className={active === 3 ? "active" : ""}>Create your password</p>
          </div>

          {active === 1 ? (
            <div className="form-ctn active-form">
              <form>
                <div className="input-ctn">
                  <label htmlFor="email"> What is your email?</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p>You will need to verify your email</p>
                </div>
                <button onClick={() => setActive(2)} className="submit-btn">
                  Next
                </button>
              </form>
            </div>
          ) : active === 2 ? (
            <div className="form-ctn">
              <form>
                <div className="input-ctn">
                  <label htmlFor="name"> What is your name?</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="input-wrapper">
                  <div className="input-ctn">
                    <label htmlFor="year"> How many years Of Teaching Experience?</label>
                    <input id="year" type="text" placeholder="Years of experience" />
                  </div>
                  <div className="input-ctn">
                    <label htmlFor="subject"> Subject </label>
                    <input id="subject" type="text" placeholder="Your subject" />
                  </div>
                </div>
                <button onClick={() => setActive(3)}>Next</button>
              </form>
            </div>
          ) : (
            active === 3 && (
              <div className="form-ctn ">
                <form>
                  <div className="input-ctn">
                    <label htmlFor="password"> Enter password</label>
                    <input
                      id="password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="input-ctn">
                    <label htmlFor="cpassword"> Confirm password</label>
                    <input id="cpassword" type="password" />
                  </div>

                  <button onClick={CreateAccount} type="sumbmit">
                    Create Account
                  </button>
<<<<<<< HEAD
                  <NavigateButton title={"Create Account"} link={"/teacherdashboard"} />
=======
>>>>>>> 740630a6374ff1d0e80d925b25206c8df07d5b89
                </form>
              </div>
            )
          )}
        </div>
<<<<<<< HEAD
=======

>>>>>>> 740630a6374ff1d0e80d925b25206c8df07d5b89
        <div className="flex my-4">
          {" "}
          <div className="">
            <ConnectButton label="connect with wallet" />
          </div>
          <div className="">
            <button className="border-2 bg-blue-500 text-white rounded-lg px-4 pb-2 py-2 font-bold text-sm cursor-pointer">
              {" "}
              connect with Google
            </button>
<<<<<<< HEAD

        <div className="google-ctn">
          <div className="google-wrapper-one">
            <p className="line-one"></p>
            <h4 className="google-header">OR CONTINUE WITH</h4>
            <p className="line-two"></p>
          </div>
          <div className="google-wrapper-two">
            <button className="button-one">
            <svg
             width="17"
             height="15"
             viewBox="0 0 32 33"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
            >
            
            <path
                  d="M25.6002 10.1389H5.6002V9.33892L23.2002 7.93092V9.33892H25.6002V6.93892C25.6002 5.17892 24.1746 3.94372 22.4338 4.19172L6.3682 6.48612C4.6258 6.73572 3.2002 8.37892 3.2002 10.1389V26.1389C3.2002 26.9876 3.53734 27.8015 4.13745 28.4017C4.73757 29.0018 5.5515 29.3389 6.4002 29.3389H25.6002C26.4489 29.3389 27.2628 29.0018 27.8629 28.4017C28.4631 27.8015 28.8002 26.9876 28.8002 26.1389V13.3389C28.8002 12.4902 28.4631 11.6763 27.8629 11.0762C27.2628 10.4761 26.4489 10.1389 25.6002 10.1389ZM23.2002 21.3485C22.8849 21.3484 22.5727 21.2862 22.2815 21.1655C21.9903 21.0447 21.7257 20.8678 21.5028 20.6448C21.2799 20.4218 21.1032 20.157 20.9826 19.8657C20.8621 19.5744 20.8001 19.2622 20.8002 18.9469C20.8003 18.6316 20.8625 18.3195 20.9833 18.0282C21.104 17.737 21.2809 17.4724 21.5039 17.2495C21.7269 17.0267 21.9917 16.8499 22.283 16.7294C22.5743 16.6088 22.8865 16.5468 23.2018 16.5469C23.8385 16.5471 24.4491 16.8003 24.8992 17.2507C25.3493 17.7011 25.602 18.3118 25.6018 18.9485C25.6016 19.5853 25.3484 20.1958 24.8981 20.6459C24.4477 21.096 23.8369 21.3487 23.2002 21.3485Z"
                  fill="#2364AA"
                />
              </svg>
              Connect Wallet
              </button>
            <button className="button-two">
            <svg
                width="15"
                height="15"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.0005 12.7721C23.0005 11.9088 22.9291 11.2788 22.7744 10.6255H12.7148V14.5221H18.6196C18.5006 15.4905 17.8577 16.9488 16.4291 17.9288L16.4091 18.0592L19.5897 20.4739L19.8101 20.4955C21.8338 18.6638 23.0005 15.9688 23.0005 12.7721Z"
                  fill="#4285F4"
                />
                <path
                  d="M12.714 23.039C15.6068 23.039 18.0353 22.1056 19.8092 20.4956L16.4282 17.9288C15.5235 18.5472 14.3092 18.9789 12.714 18.9789C9.88069 18.9789 7.47596 17.1472 6.61874 14.6155L6.49309 14.626L3.18583 17.1344L3.14258 17.2522C4.90446 20.6822 8.5235 23.039 12.714 23.039Z"
                  fill="#34A853"
                />
                <path
                  d="M6.62095 14.6157C6.39476 13.9623 6.26386 13.2623 6.26386 12.539C6.26386 11.8156 6.39476 11.1156 6.60905 10.4623L6.60306 10.3232L3.25435 7.77454L3.14478 7.82561C2.41862 9.24896 2.00195 10.8473 2.00195 12.539C2.00195 14.2306 2.41862 15.8289 3.14478 17.2523L6.62095 14.6157Z"
                  fill="#FBBC05"
                />
                <path
                  d="M12.7141 6.09891C14.7259 6.09891 16.083 6.95057 16.8569 7.66229L19.8807 4.76894C18.0236 3.07728 15.6069 2.03894 12.7141 2.03894C8.52353 2.03894 4.90447 4.39559 3.14258 7.82556L6.60686 10.4623C7.47598 7.9306 9.88073 6.09891 12.7141 6.09891Z"
                  fill="#EB4335"
                />
              </svg>
              Google
           </button>
=======
>>>>>>> 740630a6374ff1d0e80d925b25206c8df07d5b89
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterTeacher;