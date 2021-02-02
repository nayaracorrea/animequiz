/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react';
import QuizContainer from '../src/components/QuizContainer';
import db from '../db.json';
import Button from '../src/components/Button';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo/logo';
import Widget from '../src/components/Widget';

function LoadingWidget() {
	return (
		<Widget>
			<Widget.Header>
				Carregando...
			</Widget.Header>

			<Widget.Content>
				[Desafio do Loading]
			</Widget.Content>
		</Widget>
	);
}

function QuestionWidget({ question, totalQuestions, questionIndex }) {
	return (
		<Widget>
			<Widget.Header>
				<h3>
					{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
				</h3>
			</Widget.Header>
			<img
				alt="Descrição"
				style={{
					width: '100%',
					height: '150px',
					objectFit: 'cover',
				}}
				src={question.image}
			/>
			<Widget.Content>
				<h2>
					{question.title}
				</h2>
				<p>
					{question.description}
				</p>

				<Button type="submit">
					Confirmar
				</Button>
			</Widget.Content>
		</Widget>


	)
}

export default function QuizPage() {
	console.log('Perguntas ', db.questions);
	const totalQuestions = db.questions.length;
	const questionIndex = 0;
	const question = db.questions[questionIndex];

	return (
		<QuizBackground backgroundImage={db.bg}>
			<QuizContainer>
				<QuizLogo />

				<QuestionWidget
					question={question}
					questionIndex={questionIndex}
					totalQuestions={totalQuestions}
				/>
				<LoadingWidget />
			</QuizContainer>
		</QuizBackground>
	);
}
