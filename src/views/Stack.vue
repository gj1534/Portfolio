<template>
    <div class="container pt mt md">
        <!-- Stack 시작 -->
        <div class="col-lg-8 mx-auto text-center md">
            <h2 class="section-header fonsiz-xxxl fonwei-en-xxl letsp-sm text-upper color-basic">Stack</h2>
            <p class="color-basic fonsiz-xl fonwei-kr-xs letsp-xs ws-sm mt-4">
                새로운 기술을 빠르게 습득하며, 새로운 트렌드에 관심가지려 노력합니다.<br><br>
                <span class="fonwei-en-xl letsp-md">"제가 보유하고 있는 기술입니다."</span>   
            </p>
        </div>
        <div class="card shadow">
          <div class="card-body">
            <div class="table-responsive" id="stacks">
              <table class="table table-hover align-middle" >
                <thead>
                  <tr class="fonsiz-sm fonwei-kr-md letsp-sm color-basic-opac text-center vertmid">
                    <th>기술 구분</th>
                    <th>로고</th>
                    <th>활용 수준</th>
                    <th>평가</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="col" class="table-title letsp-md align-middle">Java</th>
                    <td class="align-middle">
                      <img src="../assets/svg/java.svg" alt="Java Logo" />
                    </td>
                    <td>
                      기업에서 Java로 구성된 자체적인 Framework를 사용하여 개발하였습니다.
                      OOP 에 대한 이해와 Proxy, Broker, Facade, Factory 등의 Design Pattern 구사가 가능합니다.
                      Jsp&Servlet, MVC 등의 Java 기술을 적극활용하여 Web Application 제작이 가능합니다.
                    </td>
                    <td class="align-middle">
                      <div class="star-icon text-center">
                        <b-icon icon="star-fill"></b-icon>
                        <b-icon icon="star-fill"></b-icon>
                        <b-icon icon="star-fill"></b-icon>
                        <b-icon icon="star-half"></b-icon>
                        <b-icon icon="star"></b-icon>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col" class="table-title letsp-md align-middle">JavaScript</th>
                    <td class="align-middle">
                      <img src="../assets/svg/javascript.svg" alt="JavaScript Logo" />
                    </td>
                    <td>
                      RESTFul 구조로 API를 설계하고 개발할 수 있으며 ES5 기반 코딩을 자유롭게 다룰수 있습니다.
                      객체를 모듈화 하고 이를 모듈화 하여 API 문서화하여 제공해본 경험이 있습니다.
                      브라우저간 호환성을 중요하게 생각하여 IE 환경에서도 정상작동할 수 있도록 개발하고 있습니다. 
                      최근에는 ES6 기반의 문법도 적응하려 노력중입니다.
                    </td>
                    <td class="align-middle">
                      <div class="star-icon text-center">
                        <b-icon icon="star-fill"></b-icon>
                        <b-icon icon="star-fill"></b-icon>
                        <b-icon icon="star-fill"></b-icon>
                        <b-icon icon="star-half"></b-icon>
                        <b-icon icon="star"></b-icon>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col" class="table-title letsp-md align-middle">Oracle DB</th>
                    <td class="align-middle">
                      <img src="../assets/svg/oracle.svg" alt="Oracle DB Logo" />
                    </td>
                    <td>
                      관계형 데이터베이스를 설계하고 Java를 사용하여 높은 생산성으로 API를 개발하고 있습니다
                      데이터 모델링 시 CAMEL CASE로 필드명을 정의하여 설계하며, 정규화가 가능합니다.
                    </td>
                    <td class="align-middle">
                      <div class="star-icon text-center">
                        <b-icon icon="star-fill"></b-icon>
                        <b-icon icon="star-fill"></b-icon>
                        <b-icon icon="star-fill"></b-icon>
                        <b-icon icon="star"></b-icon>
                        <b-icon icon="star"></b-icon>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col" class="table-title letsp-md align-middle">Spring Framework</th>
                    <td class="align-middle">
                      <img src="../assets/svg/spring-icon.svg" alt="Spring Logo" />
                    </td>
                    <td>
                      Spring 의 각 개념과 동작원리를 이해하고 있으며, Maven, MyBatis 등 활용경험 있습니다. 
                      이를 바탕으로한 실제 프로젝트 개발경험이 있습니다.
                    </td>
                    <td class="align-middle">
                      <div class="star-icon text-center">
                        <b-icon icon="star-fill"></b-icon>
                        <b-icon icon="star-fill"></b-icon>
                        <b-icon icon="star-fill"></b-icon>
                        <b-icon icon="star"></b-icon>
                        <b-icon icon="star"></b-icon>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col" class="table-title letsp-md align-middle">Android</th>
                    <td class="align-middle">
                      <img src="../assets/svg/android-icon.svg" alt="Android Logo" />
                    </td>
                    <td>
                      Aphache Cordova Framework 를 통한 모바일 하이브리드 앱 개발경험이 있습니다.
                      저는 주로 Android 관련 서비스를 개발하였으며, 기업 SDK 를 사용한 서비스 고도화 경험 있습니다.
                    </td>
                    <td class="align-middle">
                      <div class="star-icon text-center">
                        <b-icon icon="star-fill"></b-icon>
                        <b-icon icon="star-fill"></b-icon>
                        <b-icon icon="star-fill"></b-icon>
                        <b-icon icon="star"></b-icon>
                        <b-icon icon="star"></b-icon>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col" class="table-title letsp-md align-middle">Node.js</th>
                    <td class="align-middle">
                      <img src="../assets/svg/nodejs.svg" alt="Node.js Logo" />
                    </td>
                    <td>
                      Node.js 는 현재 배우는 단계이며 Vue js 등을 조합하여 간단한 웹 개발 프레임워크를 구축할 수 있습니다.
                      또한, Express.js 등을 활용하여 JWT 등의 토큰기반 인증시스템 구축 까지를 목표로 삼아 공부하고 있습니다.
                    </td>
                    <td class="align-middle">
                      <div class="star-icon text-center">
                        <b-icon icon="star-fill"></b-icon>
                        <b-icon icon="star"></b-icon>
                        <b-icon icon="star"></b-icon>
                        <b-icon icon="star"></b-icon>
                        <b-icon icon="star"></b-icon>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="col" class="table-title letsp-md align-middle">Vue</th>
                    <td class="align-middle">
                      <img src="../assets/svg/vue.svg" alt="Vue Logo" />
                    </td>
                    <td>
                      Vue JS는 현재 배우는 단계이며, 이 포트폴리오 페이지 역시 Vue로 작성되었습니다.
                      대부분의 필요한 웹 컴포넌트를 ES6 환경에서 능숙하게 다룰 수 있도록 하는것이 목표입니다.<br>(CRUD, RESTful 등..)
                    </td>
                    <td class="align-middle">
                      <div class="star-icon text-center">
                        <b-icon icon="star-fill"></b-icon>
                        <b-icon icon="star"></b-icon>
                        <b-icon icon="star"></b-icon>
                        <b-icon icon="star"></b-icon>
                        <b-icon icon="star"></b-icon>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-desc fonsiz-xs fonwei-kr-sm letsp-sm text-center color-basic-opac">객관화하기 어려운 관계로, 제가 이해하고 구현할 수 있는 수준을 작성했습니다.</div>
          </div>
        </div>
    </div>
    <!-- Stack 종료 -->
</template>
<script>
export default {
    
}
</script>