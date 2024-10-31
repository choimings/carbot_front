import React, { useState } from 'react';
import './join.css';
import { Link } from 'react-router-dom';
import Modal from './AuthModal/JoinModal'; // 모달 컴포넌트 경로 확인

const Join = () => {
  const [formData, setFormData] = useState({
    email: '',
    id: '',
    phone: '',
    name: '',
    password: '',
    confirmPassword: '',
    birthYear: '',
    residence: '',
    gender: '',
    carOwnership: '',
    termsAgree: false,
    privacyAgree: false,
    thirdPartyAgree: false,
    ageConfirm: false,
  });
  const [errors, setErrors] = useState({});
  const [verificationMessage, setVerificationMessage] = useState('');
  const [showModal, setShowModal] = useState(false); // 모달 상태 추가

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    setErrors({ ...errors, [name]: '' });
  };

  const handleGenderChange = (value) => {
    setFormData({ ...formData, gender: value });
    setErrors({ ...errors, gender: '' });
  };

  const handleCarOwnershipChange = (value) => {
    setFormData({ ...formData, carOwnership: value });
    setErrors({ ...errors, carOwnership: '' });

    if (value === '보유') {
      setShowModal(true); // 차량 보유 선택 시 모달 표시
    } else {
      setShowModal(false);
    }
  };

  const handleVerification = () => {
    alert('인증이 완료되었습니다.');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // 필수 입력 검증
    if (!formData.email) newErrors.email = '이메일을 입력해 주세요.';
    if (!formData.id) newErrors.id = '아이디를 입력해 주세요.';
    if (!formData.phone) newErrors.phone = '전화번호를 입력해 주세요.';
    if (!formData.name) newErrors.name = '이름을 입력해 주세요.';
    if (!formData.password) newErrors.password = '비밀번호를 입력해 주세요.';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = '비밀번호를 다시 확인해 주세요.';
    }
    if (!formData.birthYear) newErrors.birthYear = '*';
    if (!formData.residence) newErrors.residence = '*';
    if (!formData.gender) newErrors.gender = '*';
    if (!formData.carOwnership) newErrors.carOwnership = '*';
    if (!formData.termsAgree) newErrors.termsAgree = '*';
    if (!formData.privacyAgree) newErrors.privacyAgree = '*';
    if (!formData.thirdPartyAgree) newErrors.thirdPartyAgree = '*';
    if (!formData.ageConfirm) newErrors.ageConfirm = '*';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted successfully');
    }
  };

  return (
    <div className='join-container'>
      <div className='join-box'>
        <h1>회원가입</h1>
        <form className='join-form' onSubmit={handleSubmit}>
          {/* 입력창 박스 */}
          <div className='input-fields-box'>
            <div className='input-group'>
              <input
                type='email'
                name='email'
                placeholder='이메일 입력'
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              <button
                type='button'
                className='verify-button'
                onClick={handleVerification}
              >
                인증
              </button>
            </div>
            {verificationMessage && (
              <p className='verification-message'>{verificationMessage}</p>
            )}
            {errors.email && (
              <p className='join-error-message'>{errors.email}</p>
            )}

            <div className='input-group'>
              <input
                type='text'
                name='id'
                placeholder='아이디 입력'
                value={formData.id}
                onChange={handleChange}
                className={errors.id ? 'error' : ''}
              />
              <button type='button' className='check-button'>
                중복 체크
              </button>
            </div>
            {errors.id && <p className='join-error-message'>{errors.id}</p>}

            <input
              type='text'
              name='phone'
              placeholder='전화번호 입력'
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? 'error' : ''}
            />
            {errors.phone && (
              <p className='join-error-message'>{errors.phone}</p>
            )}

            <input
              type='text'
              name='name'
              placeholder='이름 입력'
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <p className='join-error-message'>{errors.name}</p>}

            <input
              type='password'
              name='password'
              placeholder='비밀번호 입력'
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'error' : ''}
            />
            {errors.password && (
              <p className='join-error-message'>{errors.password}</p>
            )}

            <input
              type='password'
              name='confirmPassword'
              placeholder='비밀번호 확인'
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? 'error' : ''}
            />
            {errors.confirmPassword && (
              <p className='join-error-message'>{errors.confirmPassword}</p>
            )}
          </div>

          {/* 출생년도/거주지 박스 */}
          <div className='birth-residence-box'>
            <select
              name='birthYear'
              value={formData.birthYear}
              onChange={handleChange}
              className={errors.birthYear ? 'error' : ''}
            >
              <option value=''>출생년도</option>
              {[...Array(56).keys()].map((i) => (
                <option key={1950 + i} value={1950 + i}>
                  {1950 + i}
                </option>
              ))}
            </select>
            {errors.birthYear && (
              <p className='join-error-message'>{errors.birthYear}</p>
            )}

            <select
              name='residence'
              value={formData.residence}
              onChange={handleChange}
              className={errors.residence ? 'error' : ''}
            >
              <option value=''>거주지</option>
              {[
                '서울특별시',
                '부산광역시',
                '대구광역시',
                '인천광역시',
                '광주광역시',
                '대전광역시',
                '울산광역시',
                '세종특별자치시',
                '경기도',
                '강원도',
                '충청북도',
                '충청남도',
                '전라북도',
                '전라남도',
                '경상북도',
                '경상남도',
                '제주특별자치도',
              ].map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
            {errors.residence && (
              <p className='join-error-message'>{errors.residence}</p>
            )}
          </div>

          {/* 성별/차량 보유 여부 박스 */}
          <div className='gender-car-ownership-box'>
            <div className='checkbox-group'>
              {errors.gender && (
                <p className='join-error-message'>{errors.gender}</p>
              )}
              <label>성별:</label>

              <label>
                <input
                  type='radio'
                  name='gender'
                  value='남자'
                  checked={formData.gender === '남자'}
                  onChange={() => handleGenderChange('남자')}
                />{' '}
                남자
              </label>
              <label>
                <input
                  type='radio'
                  name='gender'
                  value='여자'
                  checked={formData.gender === '여자'}
                  onChange={() => handleGenderChange('여자')}
                />{' '}
                여자
              </label>
            </div>

            <div className='checkbox-group'>
              {errors.carOwnership && (
                <p className='join-error-message'>{errors.carOwnership}</p>
              )}
              <label>차량 보유 여부:</label>
              <label>
                <input
                  type='radio'
                  name='carOwnership'
                  value='보유'
                  checked={formData.carOwnership === '보유'}
                  onChange={() => handleCarOwnershipChange('보유')}
                />{' '}
                보유
              </label>
              <label>
                <input
                  type='radio'
                  name='carOwnership'
                  value='미보유'
                  checked={formData.carOwnership === '미보유'}
                  onChange={() => handleCarOwnershipChange('미보유')}
                />{' '}
                미보유
              </label>
            </div>
          </div>

          {/* 이용 동의 박스 */}
          <div className='terms-box'>
            <label>
              <input
                type='checkbox'
                name='termsAgree'
                checked={formData.termsAgree}
                onChange={handleChange}
              />
              이용약관에 동의합니다.
              {errors.termsAgree && (
                <p className='join-error-message'>{errors.termsAgree}</p>
              )}
            </label>

            <label>
              <input
                type='checkbox'
                name='privacyAgree'
                checked={formData.privacyAgree}
                onChange={handleChange}
              />
              개인정보 수집, 이용 동의에 동의합니다.
              {errors.privacyAgree && (
                <p className='join-error-message'>{errors.privacyAgree}</p>
              )}
            </label>

            <label>
              <input
                type='checkbox'
                name='thirdPartyAgree'
                checked={formData.thirdPartyAgree}
                onChange={handleChange}
              />
              개인정보 제3자 제공 동의에 동의합니다.
              {errors.thirdPartyAgree && (
                <p className='join-error-message'>{errors.thirdPartyAgree}</p>
              )}
            </label>

            <label>
              <input
                type='checkbox'
                name='ageConfirm'
                checked={formData.ageConfirm}
                onChange={handleChange}
              />
              저는 만 18세 이상입니다.
              {errors.ageConfirm && (
                <p className='join-error-message'>{errors.ageConfirm}</p>
              )}
            </label>
          </div>

          <button type='submit' className='submit-button'>
            확인
          </button>

          <div className='footer-links'>
            <Link to='/login'>이미 회원이신가요? 로그인</Link>
          </div>
        </form>
      </div>

      {/* 차량 정보 모달 */}
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Join;
