import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { checkmarkDone, checkmarkDoneOutline, logInOutline, personCircleOutline } from 'ionicons/icons';
import React from 'react';

const Register: React.FC = () => {
	const router = useIonRouter();

	const doRegister = (event: any) => {
		event.preventDefault();
		console.log('doRegister');
		router.goBack();
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color={'success'}>
					<IonButtons slot='start'>
						<IonBackButton defaultHref='/' />
					</IonButtons>
					<IonTitle>Create Account</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent scrollY={false}>
				<IonGrid fixed>
					<IonRow className='ion-justify-content-center'>
						<IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
							<IonCard>
								<IonCardContent>
									<form onSubmit={doRegister}>
										<IonInput fill='outline' labelPlacement='floating' label='Email' type='email' placeholder='farhan@email.com'></IonInput>
										<IonInput className='ion-margin-top' fill='outline' labelPlacement='floating' label='Password' type='password'></IonInput>
										<IonButton className='ion-margin-top' expand='block' type='submit'>
											Create my account
											<IonIcon icon={checkmarkDoneOutline} slot='end'></IonIcon>
										</IonButton>
									</form>
								</IonCardContent>
							</IonCard>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default Register;