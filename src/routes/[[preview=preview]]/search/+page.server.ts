import * as prismic from '@prismicio/client';

import { Resend } from 'resend';

import { RESEND_API_KEY as RESEND } from '$env/static/private';

import { createClient } from '$lib/prismicio';

export async function load({ fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const page = await client.getSingle('search');

	return {
		page,
		title: page.data.title,
		meta_description: page.data.meta_description,
		meta_title: page.data.meta_title,
		meta_image: page.data.meta_image
	};
}

export function entries() {
	return [{}];
}

export const actions = {
	email: async ({ request }) => {
		// resend.domains.verify('21d74a35-afe5-4f11-9b6f-8a42a899cda2');

		const formData = await request.formData();
		const email = formData.get('email');
		const message = formData.get('message');

		try {
			const resend = new Resend(RESEND);
			await resend.emails.send({
				from: 'info@alastaircox.com',
				to: 'alastair@alastaircox.com',
				replyTo: 'alastair@alastaircox.com',
				subject: `Website enquiry from ${email}`,
				html: ` <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="margin:0 auto;padding:20px 0 48px">
      <tbody>
        <tr style="width:100%">
          <td>
						
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:24px;border:solid 1px #dedede;border-radius:5px;">
              <tbody>
                <tr>
                  <td>
                  <p style="font-size:16px;line-height:1.25;margin:16px 0"><strong>Sender: </strong>${email}</p>
                    <p style="font-size:16px;line-height:24px;margin:0 0 10px 0;text-align:left"><strong>Message: </strong>${message}</p>
                  </td>
                </tr>
              </tbody>
            </table>
           
          </td>
        </tr>
      </tbody>
    </table><!--/$-->`
			});

			console.log(formData);
		} catch (error) {
			console.log(error);
		}

		// Process the form data and perform actions
		return { success: true, email, message };
	},

	search: async ({ request }) => {
		const formData = await request.formData();
		const search = formData.get('search');

		let publications: any[] = [];

		try {
			const client = createClient({ fetch });
			if (search) {
				publications = await client.getAllByType('case_study', {
					filters: [prismic.filter.fulltext('document', search?.toString())]
				});
			}
		} catch (error) {}

		// Process the form data and perform actions
		return { success: true, publications };
	}
};

export const prerender = false;
